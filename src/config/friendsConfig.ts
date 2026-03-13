import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "雪中小屋",
		imgurl: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Faf3770f2-1542-4e63-86fd-6979a11f2158%2F997f0ac5-4642-423a-bc61-89eefcfa2be4%2F%25E5%25A2%25A8%25E5%25B0%258F%25E8%258F%258A%25E5%25A4%25B4%25E5%2583%258F.jpg?table=collection&id=af45dc65-0834-4ffd-ae70-a2e1dd9bc573&t=af45dc65-0834-4ffd-ae70-a2e1dd9bc573&width=1080&cache=v2",
		desc: "一个热爱技术的博主，喜欢分享各种有趣的技术文章和资源。",
		siteurl: "https://blog.xueayi.site",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "XiaohuangWebsite",
		imgurl: "https://youke.猪猪网络.cn/s1/2026/01/28/6979c5a6703c8.webp",
		desc: "今天的你……嗯……也要开心喵~ 爱你 o(*￣▽￣*)o ",
		siteurl: "https://www.xiaohuang.xyz",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "夏夜流萤",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 9,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
