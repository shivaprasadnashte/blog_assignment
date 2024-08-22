"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function BlogView() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great article, really enjoyed reading it!",
      createdAt: "2023-05-15T12:34:56Z",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Interesting perspective, thanks for sharing!",
      createdAt: "2023-05-16T09:12:34Z",
    },
    {
      id: 3,
      author: "Michael Johnson",
      content: "I learned a lot from this post. Well done!",
      createdAt: "2023-05-17T15:45:23Z",
    },
  ])
  const [newComment, setNewComment] = useState("")
  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        id: comments.length + 1,
        author: "You",
        content: newComment,
        createdAt: new Date().toISOString(),
      }
      setComments([...comments, newCommentObj])
      setNewComment("")
    }
  }
  const handleCommentDelete = (commentId:any) => {
    setComments(comments.filter((comment) => comment.id !== commentId))
  }
  const handleCommentUpdate = (commentId:any, updatedContent:any) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, content: updatedContent } : comment)),
    )
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="container px-4 md:px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h1 className="text-4xl font-bold">The Benefits of Mindfulness</h1>
              <p className="text-muted-foreground mt-2">
                Mindfulness has been shown to have numerous benefits for mental and physical health. In this blog post,
                we explore the science behind mindfulness and how you can incorporate it into your daily life.
              </p>
              <div className="flex items-center text-muted-foreground text-sm mt-4">
                <span>John Doe</span>
                <span className="mx-2">•</span>
                <span>May 15, 2023</span>
              </div>
              <div className="prose prose-lg mt-8">
                <p>
                  Mindfulness is the practice of being present and fully engaged in the current moment, without judgment
                  or distraction. It has been shown to have a wide range of benefits for both mental and physical
                  health, including reduced stress and anxiety, improved focus and concentration, and even enhanced
                  immune function.
                </p>
                <p>
                  One of the key benefits of mindfulness is its ability to help us manage stress and anxiety. When we're
                  mindful, we're able to observe our thoughts and feelings without getting caught up in them. This can
                  help us respond to stressful situations with more clarity and calm, rather than reacting in a way that
                  might make the situation worse.
                </p>
                <p>
                  Mindfulness has also been shown to improve focus and concentration. By training our minds to stay
                  present and attentive, we can become better at ignoring distractions and staying on task. This can be
                  particularly helpful for tasks that require sustained attention, such as work or studying.
                </p>
                <p>
                  In addition to these mental benefits, mindfulness has also been linked to improved physical health.
                  Studies have shown that mindfulness can boost the immune system, reduce inflammation, and even improve
                  cardiovascular health.
                </p>
                <p>
                  If you're interested in incorporating mindfulness into your life, there are a few simple practices you
                  can try. One of the most common is meditation, which involves sitting quietly and focusing on your
                  breath or a mantra. You can also try mindful walking, where you focus on the sensations of your body
                  as you move, or mindful eating, where you pay attention to the taste, texture, and aroma of your food.
                </p>
                <p>
                  The key is to start small and be consistent. Even just a few minutes of mindfulness practice each day
                  can have a significant impact on your overall well-being.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Comments</h2>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-muted rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{comment.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleString()}
                      </div>
                    </div>
                    <p className="mt-2">{comment.content}</p>
                    <div className="mt-2 flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCommentUpdate(comment.id, "Updated comment")}
                      >
                        Update
                      </Button>
                      <Button size="sm" variant="secondary" onClick={() => handleCommentDelete(comment.id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full"
                />
                <Button size="sm" className="mt-2" onClick={handleCommentSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}

function PenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}