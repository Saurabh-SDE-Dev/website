import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AlertCircle } from 'lucide-react';
import { GITHUB_CONFIG } from '@/data/github';
import { fetchGitHubRepos, GitHubRepo } from '@/lib/github';
import { RepositoryCard } from './RepositoryCard';

export async function GitHub() {
  let repos: GitHubRepo[] = [];
  let error: string | null = null;

  if (GITHUB_CONFIG.username) {
    try {
      repos = await fetchGitHubRepos(GITHUB_CONFIG.username, GITHUB_CONFIG.featuredRepos);
    } catch (err) {
      console.error(err);
      error = 'Failed to load GitHub repositories. Please try again later.';
    }
  }

  return (
    <section id="github" className="py-20 border-b border-gray-100 bg-gray-50/50 reveal-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaGithub className="text-gray-900" />
              Open Source & Code
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
            <p className="text-lg text-gray-600">
              Explore my open-source contributions, personal projects, and code experiments. I believe in writing clean, maintainable, and well-documented code.
            </p>
          </div>
          
          {GITHUB_CONFIG.username && (
            <a 
              href={`https://github.com/${GITHUB_CONFIG.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-500 px-4 py-2 text-base gap-2 shrink-0 btn"
            >
              <FaGithub size={18} />
              View GitHub Profile
            </a>
          )}
        </div>

        {!GITHUB_CONFIG.username ? (
          <div className="bg-white border border-gray-200 border-dashed rounded-2xl p-12 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGithub size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">GitHub Configuration Pending</h3>
            <p className="text-gray-600 mb-6">
              Add your GitHub username to <code>src/data/github.ts</code> to automatically fetch and display your repositories here.
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 flex flex-col items-center text-center max-w-2xl mx-auto">
            <AlertCircle size={32} className="text-red-500 mb-4" />
            <h3 className="text-lg font-bold text-red-900 mb-2">Oops! Something went wrong</h3>
            <p className="text-red-700">{error}</p>
          </div>
        ) : repos.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-gray-600">No public repositories found for this user.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
