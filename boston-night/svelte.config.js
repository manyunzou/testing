import adapterStatic from "@sveltejs/adapter-static";
import {
    vitePreprocess
} from '@sveltejs/kit/vite';
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
    preprocess: vitePreprocess(),
 
    kit: {
        adapter: adapterStatic(),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
        }
    }
};

// const config = {
// 	preprocess,
// 	kit: {
// 		adapter: adapterStatic()
// 	},
// 	vitePlugin: {
// 		// experimental: {
// 		// 	inspector: { holdMode: true },
// 		// }
// 	}
// };

export default config;
