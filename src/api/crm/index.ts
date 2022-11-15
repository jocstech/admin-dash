import { defHttp } from '/@/utils/http/axios';
import { Tag, Article } from '/#/server';

enum Api {
  ARTICLES = '/articles/',
  TAGS = '/tags/',
}

// Articles_________________

/**
 * @description: getArticles
 */
export function getArticles() {
  return defHttp.get<Article>({ url: Api.ARTICLES }, { errorMessageMode: 'message' });
}

/**
 * @description: getArticleById
 */
export function getArticleById(id: string) {
  return defHttp.get<Article>({ url: Api.ARTICLES + id }, { errorMessageMode: 'message' });
}

/**
 * @description: saveArticle
 */
export function saveArticle(article: Article) {
  return defHttp.post<Article>(
    { url: Api.ARTICLES, data: article },
    { errorMessageMode: 'message' },
  );
}

/**
 * @description: updateArticle
 */
export function updateArticle(id: string, article: Article) {
  return defHttp.patch<Article>(
    { url: Api.ARTICLES + id, data: article },
    { errorMessageMode: 'message' },
  );
}

// Tags_________________

/**
 * @description: getTags
 */
export function getTags() {
  return defHttp.get<Tag>({ url: Api.TAGS }, { errorMessageMode: 'message' });
}

/**
 * @description: getTagById
 */
export function getTagById(id: string) {
  return defHttp.get<Tag>({ url: Api.TAGS + id }, { errorMessageMode: 'message' });
}
