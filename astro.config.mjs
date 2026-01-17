// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '致新生的你',
			customCss: ['./src/styles/custom.css'],
			components: {
				Pagination: './src/components/starlight/Pagination.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Axi404/for-beginners-docs' }],
			sidebar: [
				{ label: '导读', slug: '' },
				{ label: '前言', slug: 'preface' },
				{ label: '濒临奔溃的本科教学', slug: 'teaching-crisis' },
				{ label: '学问的学问，生活的学问', slug: 'learning-and-life' },
				{
					label: 'Learn to learn', items: [
						{ label: '引言', slug: 'learn-to-learn/intro' },
						{ label: '信息差', slug: 'learn-to-learn/information-gap' },
						{ label: '持续学习', slug: 'learn-to-learn/continual-learning' },
					]
				},
				{
					label: '人工智能的学习路线', items: [
						{ label: '引言', slug: 'ai-roadmap/intro' },
						{ label: '一切开始之前', slug: 'ai-roadmap/before-begin' },
						{ label: '基础数理知识', slug: 'ai-roadmap/basic-math' },
						{ label: '认识你的电脑', slug: 'ai-roadmap/computer' },
						{ label: 'Markdown，记录你的笔记', slug: 'ai-roadmap/markdown' },
						{ label: 'VSCode，Not IDE', slug: 'ai-roadmap/vscode' },
						{ label: 'Chat with LLM', slug: 'ai-roadmap/chat-with-llm' },
						{ label: "氛围编程，编程是一种思想", slug: 'ai-roadmap/vibe-coding' },
						{ label: '你唯一在深度学习中需要掌握的语言', slug: 'ai-roadmap/python' },
						{ label: 'Linux (and Git)', slug: 'ai-roadmap/linux' },
						{ label: '机器学习与计算机视觉是否真的必要', slug: 'ai-roadmap/ml-cv' },
						{ label: '深度学习', slug: 'ai-roadmap/dl' },
						{ label: '论文阅读 and so on', slug: 'ai-roadmap/paper-reading' },
						{ label: '加入课题组', slug: 'ai-roadmap/join-group' },
						{ label: '完成第一篇论文', slug: 'ai-roadmap/first-paper' },
						{ label: '中稿之后', slug: 'ai-roadmap/after-camera-ready' },
						{ label: '去做更重要的事情', slug: 'ai-roadmap/more-important-thing' },
						{ label: '一条可能的时间线', slug: 'ai-roadmap/possible-timeline' },
					]
				},
				{
					label: '保研二三事', items: [
						{ label: '引言', slug: 'baoyan-guide/intro' },
						{ label: '保研流程', slug: 'baoyan-guide/process' },
						{ label: '保研细则', slug: 'baoyan-guide/details' },
						{ label: '两种流派', slug: 'baoyan-guide/approaches' },
					]
				},
				{ label: '结语', slug: 'conclusion' },
				{ label: 'Change Logs', slug: 'changelog' },
			],
		}),
	],
});
