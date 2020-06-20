<script context="module">
  export async function preload({ params, query }) {
    const workRes = await this.fetch("work.json");
    const workData = await workRes.json();

    if (workRes.status === 200) {
      return {
        work: workData
      };
    } else {
      this.error(contactRes.status, contactData.message);
      this.error(homeRes.status, homeData.message);
      this.error(workData.status, workData.message);
    }
  }
</script>

<script>
  import ProjectsContainer from "../../components/projects/ProjectContainer.svelte";
  export let work;
</script>

<section class="projects-container">
  <ProjectsContainer projects="{work}" />
</section>
