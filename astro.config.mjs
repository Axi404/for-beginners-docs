// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '致新生的你',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '致新生的你',
					items: [
						{ label: '导读', slug: '' },
						{ label: '前言', slug: 'preface' },
						{ label: '濒临奔溃的本科教学', slug: 'teaching-crisis' },
						{ label: '学问的学问，生活的学问', slug: 'learning-and-life' },
						{ label: 'Learn to learn', slug: 'learn-to-learn' },
						{ label: '人工智能的学习路线', slug: 'ai-roadmap' },
						{ label: '保研二三事', slug: 'baoyan-guide' },
						{ label: '结语', slug: 'conclusion' },
						{ label: 'Change Logs', slug: 'changelog' },
					],
				},
			],
		}),
	],
});
