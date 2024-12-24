/** @format */
import { Filter } from "../component";
import ListOfProjects from "../component/ListOfProjects";
const Projects = () => {
  return (
    <section className=" md:container mx-auto font-lexend py-6 px-5">
      <div className=" text-2xl font-lexend py-6">Danh sách các dự án</div>
      <Filter></Filter>
      <ListOfProjects></ListOfProjects>
    </section>
  );
};
export default Projects;
