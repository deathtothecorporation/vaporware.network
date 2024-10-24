import React from "react";
import { getCollection } from "@/utils/collections";

export default function Contribute() {
  // const requests = await getCollection("contribution");
  //return (
    //<div className="mt-10">
      //<main className="content-zone">
        //<div>
          //Please contribute to our project. Here’s the documentation to learn
          //the system and some starter tasks to encourage you to push further.
        //</div>

        //<div>
          //<p>
            //Simiilar to the "Careers" page, I think this should be a yaml
            //micro-cms that we can enter and update items in.
          //</p>
          //<p>
            //Maybe include filters for "compiler guy" "PL enthusiast" "HTTP
            //enjoyer", (not these literal terms) etc.
          //</p>
          //<p>
            //These items should link to open github Issues with the details of
            //the assignment.
          //</p>
          //<p>
            //our CONRIBUTING.md should still be relevant, but mostly as a general
            //guide, rather than a list of suggested contributions.
          //</p>
        //</div>

        //<section>
          //{contribution.map((job) => (
            //<article>
              //<h2 className="no-underline">{job.title}</h2>
              //<div dangerouslySetInnerHTML={{ __html: job.description }} />
              //{job.skills && job.skills.length > 0 && (
                //<>
                  //<span>Required skills</span>
                  //<ul>
                    //{job.skills.map((skill: string) => (
                      //<li key={skill}>{skill}</li>
                    //))}
                  //</ul>
                //</>
              //)}
            //</article>
          //))}
        //</section>
      //</main>
    //</div>
  //);
}
