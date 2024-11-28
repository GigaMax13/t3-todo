import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { TodoList } from "~/components/todo-list";

export default function Home() {
  return (
    <>
      <SignedIn>
        <div className="container flex flex-col items-center justify-center gap-12 px-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Todo App
          </h1>
          <TodoList />
        </div>
      </SignedIn>

      <SignedOut>
        <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Task Master
          </h1>
          <p className="text-2xl">
            The ultimate productivity tool for managing your daily tasks
          </p>
          <div className="max-w-xl text-lg text-gray-300">
            <p>
              Stay organized, boost productivity, and never miss a deadline.
              Task Master helps you manage your tasks with ease and efficiency.
            </p>
          </div>
          <SignInButton mode="modal">
            <button className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
              Get Started →
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </>
  );
}
