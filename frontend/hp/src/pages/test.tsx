import axios from "axios";
import useSWR from "swr";
import { useState } from "react";

// Strapiからデータを取得する関数
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// 記事データの型定義
interface Article {
  id: number;
  title: string;
  content: string;
}

// 記事一覧ページ
export default function Articles() {
  // 環境変数からStrapiのAPI URLを取得
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  // swrで記事データを取得
  const { data: articles, error } = useSWR<Article[]>(`${apiUrl}/articles`, fetcher);

  // エラーがあれば表示
  if (error) return <div>Failed to load</div>;
  // データがなければローディング中と表示
  if (!articles) return <div>Loading...</div>;

  // 記事データがあればリストとして表示
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}