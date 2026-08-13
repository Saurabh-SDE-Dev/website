import React from 'react';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { GitHubRepo } from '@/lib/github';

interface RepositoryCardProps {
  repo: GitHubRepo;
}

export function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <a 
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover-card hover:border-blue-100 cursor-pointer h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          <BookOpen size={20} className="text-gray-400 group-hover:text-blue-600" />
          <h3 className="text-lg font-bold truncate" title={repo.name}>
            {repo.name}
          </h3>
        </div>
        <FaGithub size={20} className="text-gray-400 group-hover:text-gray-900 shrink-0 transition-colors" />
      </div>

      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
        {repo.description || "No description provided."}
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-auto">
        {repo.language && (
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            {repo.language}
          </div>
        )}
        
        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
          <Star size={16} className="text-gray-400" />
          {repo.stargazers_count}
        </div>
        
        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
          <GitFork size={16} className="text-gray-400" />
          {repo.forks_count}
        </div>
      </div>
      
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-50">
          {repo.topics.slice(0, 3).map(topic => (
            <span key={topic} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
              {topic}
            </span>
          ))}
          {repo.topics.length > 3 && (
            <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
              +{repo.topics.length - 3}
            </span>
          )}
        </div>
      )}
    </a>
  );
}
