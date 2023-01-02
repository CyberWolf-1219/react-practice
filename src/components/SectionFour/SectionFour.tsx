import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { Photo, PhotosWithTotalResults, createClient } from "pexels";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProjectCard from "../ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

const pexelClient = createClient(
  "563492ad6f91700001000001a4eddbec70494b1f8b1cab913d553b43"
);

type Project = {
  name: string;
  type: number;
  desc: string;
  link: string;
};

function SectionFour() {
  const [images, setImages] = useState<Photo[] | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[] | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const result: PhotosWithTotalResults = (await pexelClient.photos.search({
        query: "development",
        page: 1,
        per_page: 10,
      })) as PhotosWithTotalResults;

      if (result.photos) {
        setImages(result.photos);
      }
    })();
  }, []);

  return (
    <section>
      <Container classes={`p-4 rounded-lg`}>
        <div className={`w-fit h-fit text-center max-w-screen-sm mx-auto`}>
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos placeat praesentium fugit, doloribus repudiandae
            perspiciatis dolorem ea reiciendis sed non! Provident est mollitia
            tenetur doloremque molestiae eius! Omnis libero ratione recusandae
            commodi voluptates. Quo reiciendis quisquam ex nostrum facere beatae
            quaerat labore in quis atque, incidunt esse voluptatibus deserunt
            aut!
          </p>
        </div>
        <FilterPanel setFilteredProjects={setFilteredProjects} />
        <div
          className={`w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {filteredProjects?.map((projectObj, index) => {
            return (
              <ProjectCard
                image={images![index].src.portrait}
                desc={projectObj.desc}
                heading={projectObj.name}
                link={projectObj.link}
                key={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SectionFour;
