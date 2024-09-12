// 从 `astro:content` 导入辅助工具
import { z, defineCollection } from "astro:content";
// 为每一个集合定义一个 `type` 和 `schema`
const postsCollection = defineCollection({
    type: 'content', // 该集合中是JSON或Yaml文件，则需要设置为'data'
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// 导出一个单独的 `collections` 对象（名字是必须的）来注册你的集合
export const collections = {
  posts: postsCollection, // 这里的key（集合名）必须和集合的目录名保持一致
};