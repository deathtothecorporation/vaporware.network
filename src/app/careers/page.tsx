import React from "react";
import { getCollection } from "@/utils/collections";

export default async function Careers() {
  const jobs = [] // await getCollection("job-posts");

  return (
    <div>
      <main className="mt-20 content-zone h-[100vh]">
        <div>
          <h2 className="berkeley">Work with us</h2>
          <p className="mt-10">Coming soon.</p>
          <section>
            {jobs.map((job) => (
              <article>
                <h2 className="no-underline">{job.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
                {job.skills && job.skills.length > 0 && (
                  <>
                    <span>Required skills</span>
                    <ul>
                      {job.skills.map((skill: string) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </>
                )}
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
