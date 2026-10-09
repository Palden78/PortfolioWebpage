"use client";

import { useCallback, useEffect, useState } from "react";
import type { FormEvent } from "react";

type StoryComment = {
  id: string;
  display_name: string;
  body: string;
  created_at: string;
};

type CommentsResponse = {
  comments: StoryComment[];
  page: number;
  totalPages: number;
  total: number;
  error?: string;
};

type StoryCommentsProps = {
  storySlug: string;
};

export default function StoryComments({ storySlug }: StoryCommentsProps) {
  const [comments, setComments] = useState<StoryComment[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadComments = useCallback(async (requestedPage: number) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/comments?story=${encodeURIComponent(storySlug)}&page=${requestedPage}`,
        { cache: "no-store" },
      );
      const data = (await response.json()) as CommentsResponse;

      if (!response.ok) {
        throw new Error(data.error || "Comments are temporarily unavailable.");
      }

      setComments(data.comments);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Comments are temporarily unavailable.",
      );
    } finally {
      setLoading(false);
    }
  }, [storySlug]);

  useEffect(() => {
    void loadComments(1);
  }, [loadComments]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          story: storySlug,
          password,
          displayName,
          body,
        }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Your comment could not be posted.");
      }

      setPassword("");
      setBody("");
      setNotice("Your comment has been posted.");
      await loadComments(1);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Your comment could not be posted.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      aria-labelledby="story-comments-heading"
      className="mt-16 border-t border-[#c9bda7] pt-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#9b7847]">
            THE GUESTBOOK
          </p>
          <h2
            id="story-comments-heading"
            className="mt-2 font-cinzel text-3xl font-medium text-[#3b3025]"
          >
            Leave a comment
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8a755b]">
          {total} {total === 1 ? "comment" : "comments"}
        </p>
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#756957]">
        Comments are public. Reading is open to everyone; posting is reserved
        for friends who have the shared password.
      </p>

      <div className="mt-8">
        {loading ? (
          <p className="py-6 text-sm text-[#756957]" aria-live="polite">
            Loading comments…
          </p>
        ) : error && comments.length === 0 ? (
          <p
            className="rounded-xl border border-[#c9bda7] bg-[#f0e8da] p-4 text-sm text-[#756957]"
            role="status"
          >
            {error}
          </p>
        ) : comments.length === 0 ? (
          <p className="rounded-xl border border-[#c9bda7] bg-[#f0e8da] p-5 text-sm text-[#756957]">
            No comments yet. Be the first to leave a note.
          </p>
        ) : (
          <div className="space-y-3" aria-live="polite">
            {comments.map((comment) => (
              <article
                key={comment.id}
                className="rounded-xl border border-[#d5c8b3] bg-[#f0e8da] px-5 py-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium text-[#3b3025]">
                    {comment.display_name}
                  </h3>
                  <time
                    className="font-mono text-[10px] tracking-wide text-[#8a755b]"
                    dateTime={comment.created_at}
                  >
                    {new Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(comment.created_at))}
                  </time>
                </div>
                <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-[#4f4234]">
                  {comment.body}
                </p>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Comment pages"
            className="mt-5 flex items-center justify-between gap-4"
          >
            <button
              type="button"
              onClick={() => void loadComments(page + 1)}
              disabled={loading || page >= totalPages}
              className="rounded-lg border border-[#c9bda7] px-4 py-2 text-sm text-[#5c4a35] transition hover:bg-[#ded0b9] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Older
            </button>
            <span className="font-mono text-[10px] tracking-widest text-[#8a755b]">
              PAGE {page} OF {totalPages}
            </span>
            <button
              type="button"
              onClick={() => void loadComments(page - 1)}
              disabled={loading || page <= 1}
              className="rounded-lg border border-[#c9bda7] px-4 py-2 text-sm text-[#5c4a35] transition hover:bg-[#ded0b9] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Newer →
            </button>
          </nav>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 rounded-2xl border border-[#c9bda7] bg-[#e4d8c3] p-5 sm:p-6"
      >
        <h3 className="font-cinzel text-xl text-[#3b3025]">
          Write in the guestbook
        </h3>
        <div className="mt-5 grid gap-4">
          <label className="grid gap-2 text-sm text-[#5c4a35]">
            Friends-only password
            <input
              type="password"
              name="comment-password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              maxLength={256}
              required
              className="w-full rounded-lg border border-[#c9bda7] bg-[#f7f1e7] px-3 py-2.5 text-[#3b3025] outline-none transition focus:border-[#9b7847] focus:ring-2 focus:ring-[#9b7847]/20"
              placeholder="The secret code friends know"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#5c4a35]">
            Display name
            <input
              type="text"
              name="display-name"
              autoComplete="nickname"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              minLength={1}
              maxLength={40}
              required
              className="w-full rounded-lg border border-[#c9bda7] bg-[#f7f1e7] px-3 py-2.5 text-[#3b3025] outline-none transition focus:border-[#9b7847] focus:ring-2 focus:ring-[#9b7847]/20"
              placeholder="What should we call you?"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#5c4a35]">
            Comment
            <textarea
              name="comment"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              minLength={1}
              maxLength={2000}
              rows={4}
              required
              className="w-full resize-y rounded-lg border border-[#c9bda7] bg-[#f7f1e7] px-3 py-2.5 text-[#3b3025] outline-none transition focus:border-[#9b7847] focus:ring-2 focus:ring-[#9b7847]/20"
              placeholder="Leave a thought, a memory, or a friendly roast…"
            />
            <span className="text-right font-mono text-[10px] text-[#8a755b]">
              {body.length}/2000
            </span>
          </label>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-800" role="alert">
            {error}
          </p>
        )}
        {notice && (
          <p className="mt-4 text-sm text-[#4e6a42]" role="status">
            {notice}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="max-w-md text-xs leading-5 text-[#756957]">
            Keep it kind. Comments are public and may be removed if they are
            abusive or spam.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-[#5c4a35] px-5 py-3 font-mono text-xs tracking-widest text-[#f7f1e7] transition hover:bg-[#3b3025] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "POSTING…" : "POST COMMENT ↗"}
          </button>
        </div>
      </form>
    </section>
  );
}
