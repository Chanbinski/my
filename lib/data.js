import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  const allPostsData = allPosts.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      'utf8'
    );
    const { data, content } = matter(fileContents);

    return {
      slug,
      data,
      content,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1;
    } else {
      return -1;
    }
  });
}