"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AddBlog() {
  const [blogData, setBlogData] = useState({
    title: "",
    body: "",
    category: "",
  });

  const handleChange = (value: string) => {
    setBlogData({ ...blogData, body: value });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogData({ ...blogData, title: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBlogData({ ...blogData, category: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send the post request with the blogData object
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/create`,
        blogData
      );

      const data = response.data;
      console.log("Blog post created:", data);

      // Reset the form fields
      setBlogData({
        title: "",
        body: "",
        category: "",
      });
    } catch (error) {
      console.log("Error creating blog post:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Add a New Blog Post
          </h1>
          <p className="text-muted-foreground">
            Fill out the form below to create a new blog post.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Blog Post Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Enter a title"
                value={blogData.title}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={blogData.category}
                onChange={handleCategoryChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Blog Post Content</Label>
              <ReactQuill
                value={blogData.body}
                onChange={handleChange}
                placeholder="Enter the blog post content"
                className="h-[400px]"
              />
            </div>
          </div>
          <Button type="submit" className="w-full mt-4">
            Publish
          </Button>
        </form>
      </div>
    </div>
  );
}
