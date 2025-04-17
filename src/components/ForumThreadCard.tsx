
import React from 'react';
import { Card } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Eye } from 'lucide-react';

interface ForumThread {
  id: number;
  title: string;
  author: string;
  avatar: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  isHot: boolean;
  excerpt: string;
}

interface ForumThreadCardProps {
  thread: ForumThread;
}

const ForumThreadCard = ({ thread }: ForumThreadCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <Link to={`/forum/thread/${thread.id}`} className="block p-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage src={thread.avatar} alt={thread.author} />
            <AvatarFallback>{thread.author.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold hover:text-pet-orange transition-colors">{thread.title}</h3>
              {thread.isHot && <Badge className="bg-red-500 hover:bg-red-600">Hot</Badge>}
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{thread.excerpt}</p>
            
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>By <span className="font-medium text-pet-brown">{thread.author}</span></span>
              <Badge variant="outline" className="bg-gray-50">{thread.category}</Badge>
              <span className="flex items-center gap-1">
                <MessageSquare size={14} />
                {thread.replies} replies
              </span>
              <span className="flex items-center gap-1">
                <Eye size={14} />
                {thread.views} views
              </span>
              <span className="ml-auto">Last activity: {thread.lastActivity}</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ForumThreadCard;
