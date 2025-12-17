import { readFileSync, writeFileSync, cpSync, existsSync, mkdirSync } from 'fs';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read root package.json to get @sveltejs/kit version
const rootPackageJson = JSON.parse(
	readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')
);

const kitVersion = rootPackageJson.dependencies['@sveltejs/kit'] || '^2.0.0';

function findFunctionDirs(dir) {
	const results = [];
	try {
		const entries = readdirSync(dir);
		for (const entry of entries) {
			const fullPath = join(dir, entry);
			const stat = statSync(fullPath);
			if (stat.isDirectory()) {
				if (entry.endsWith('.func')) {
					results.push(fullPath);
				} else {
					results.push(...findFunctionDirs(fullPath));
				}
			}
		}
	} catch (err) {
		// Directory doesn't exist or can't be read
	}
	return results;
}

const vercelOutput = join(__dirname, '..', '.vercel', 'output', 'functions');
const functionDirs = findFunctionDirs(vercelOutput);
const rootNodeModules = join(__dirname, '..', 'node_modules', '@sveltejs', 'kit');

for (const funcDir of functionDirs) {
	const packageJsonPath = join(funcDir, 'package.json');
	const funcNodeModules = join(funcDir, 'node_modules');
	const funcKitPath = join(funcNodeModules, '@sveltejs', 'kit');
	
	try {
		// Update package.json
		const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
		packageJson.dependencies = packageJson.dependencies || {};
		if (!packageJson.dependencies['@sveltejs/kit']) {
			packageJson.dependencies['@sveltejs/kit'] = kitVersion;
			writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
			console.log(`Updated ${packageJsonPath}`);
		}
		
		// Copy @sveltejs/kit to function's node_modules
		if (existsSync(rootNodeModules)) {
			// Ensure directories exist
			if (!existsSync(funcNodeModules)) {
				mkdirSync(funcNodeModules, { recursive: true });
			}
			if (!existsSync(join(funcNodeModules, '@sveltejs'))) {
				mkdirSync(join(funcNodeModules, '@sveltejs'), { recursive: true });
			}
			
			// Copy the package
			if (!existsSync(funcKitPath)) {
				cpSync(rootNodeModules, funcKitPath, { recursive: true });
				console.log(`Copied @sveltejs/kit to ${funcKitPath}`);
			}
		} else {
			console.warn(`Source @sveltejs/kit not found at ${rootNodeModules}`);
		}
	} catch (err) {
		console.error(`Error processing ${funcDir}:`, err.message);
	}
}
