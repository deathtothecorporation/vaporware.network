import React from "react";
import { getCollection } from "@/utils/collections";

export default async function Careers() {
  const jobs = await getCollection("job-posts");

  return (
    <div>
      <main className="content-zone">
        <div>
          <h1>jubs</h1>
          <p className="text-red-500">TODO: some explanation, including how to get in touch</p>
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
