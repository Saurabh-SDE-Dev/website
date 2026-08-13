export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  fork: boolean;
}

export async function fetchGitHubRepos(username: string, featuredRepos: string[]): Promise<GitHubRepo[]> {
  if (!username) {
    return [];
  }

  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };

  // Optional: Add personal access token for higher rate limits if provided in env
  if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    if (featuredRepos.length > 0) {
      // Filter for featured repos and preserve the order specified in config
      return featuredRepos
        .map(repoName => repos.find(r => r.name.toLowerCase() === repoName.toLowerCase()))
        .filter((r): r is GitHubRepo => r !== undefined);
    }

    // Default: Return top 6 repos sorted by stars, then forks, then updated
    return repos
      .filter(repo => !repo.fork) // Exclude forks by default
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
        if (b.forks_count !== a.forks_count) return b.forks_count - a.forks_count;
        return 0;
      })
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}
