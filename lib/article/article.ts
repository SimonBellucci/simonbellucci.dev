import fs from 'fs';
import matter from 'gray-matter';
import { markdownExtension, rootFolder } from '@lib/common';
import { ArticleMetadata } from '@lib/article';

export const articlesFolder = 'articles/';
export const articlesPath = `${rootFolder}${articlesFolder}`;

/**
 * Returns an article by its slug
 * @param slug
 */
export const getArticleBySlug = (slug: string) => {
  const file = `${articlesPath}${slug}${markdownExtension}`;

  try {
    const content = fs.readFileSync(file, 'utf8');
    return matter(content);
  } catch (error) {
    return null;
  }
};

/**
 * Returns the metadata of an article
 * @param fileName
 * @param addExtension
 */
export const getArticleMetadata = (
  fileName: string,
  addExtension = false,
): ArticleMetadata | null => {
  try {
    const content = fs.readFileSync(
      `${articlesPath}${addExtension ? fileName + markdownExtension : fileName}`,
      'utf8',
    );
    const matterResult = matter(content);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      updated: matterResult.data.updated,
      categories: matterResult.data.categories,
      type: matterResult.data.type,
      slug: addExtension ? fileName : fileName.replace(markdownExtension, ''),
    };
  } catch (e) {
    return null;
  }
};

/**
 * Returns an array of ArticleMetadata
 * @param limit
 */
export const getArticlesMetadata = (limit?: number): ArticleMetadata[] => {
  const files = fs.readdirSync(articlesPath);
  const markdownArticles = files.filter(file => file.endsWith(markdownExtension));

  return markdownArticles.slice(...(limit ? [0] : [0, 4])).map(fileName => {
    return getArticleMetadata(fileName)!;
  });
};
