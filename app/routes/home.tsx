import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {ResumeCard} from "~/components/ResumeCard";
import {resumes} from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeReviewer" },
    { name: "description", content: "Get feedback for your resume to get your dream job" },
  ];
}

export default function Home() {


  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar/>

    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Rating</h1>
        <h2>Review Your Application and check AI Powered feedback</h2>
      </div>

      {resumes.length > 0 && (

          <div className="resumes-section">
            {resumes.map((resume) =>(

                <ResumeCard key = {resume.id} resume = {resume} />
                )

            )}
          </div>
      )}

    </section>
    </main>
}
