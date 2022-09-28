<template>
  <div class="hold">
    <div class="small">
      <div class="nav">
        <button
          class="recordings"
          :class="{ active: video == true }"
          @click="video = true"
        >
          <i class="fa fa-film icon"></i> My Recordings
        </button>
        <button
          class="recordings"
          :class="{ active: video == false }"
          @click="video = false"
        >
          <i class="fa fa-share-alt icon"></i> Requested
        </button>
      </div>
    </div>
    <div class="big">
      <p class="brudcrum">
        Snapbyte <span><i class="fas fa-angle-right rite"></i></span>My
        Recorderings
      </p>
      <div class="holdRecord">
        <div>
          <h2 style="margin: 0">My Recorderings <span>25</span></h2>
        </div>
        <div class="holdFilter">
          <div class="holdDate">
            <input type="date" class="date" />
          </div>
          <div class="holdDate" style="margin: 0 20px">
            <select class="date">
              <option value="Add Filter">Add Filter</option>
              <option value="Name">Name</option>
              <option value="Email">Email</option>
            </select>
          </div>
          <div style="display: flex">
            <button class="new" @click="modal = !modal">
              <i class="fa fa-video-camera" style="margin-right: 10px"></i>
              New Requested
            </button>
            <router-link to="/livepreview" class="link">
              <button class="start holdREC">
                <span class="rec">REC</span>
                <span>Start Recording</span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <div v-if="video">
          <Layout1Vue />
        </div>
        <div v-else>
          <Layout3Vue />
        </div>
        <Layout2Vue :class="{ modalActive: modal }" />
      </div>
    </div>
  </div>
</template>

<script>
import Layout1Vue from "@/components/Tools/Layout1.vue";
import Layout3Vue from "@/components/Tools/Layout3.vue";
import Layout2Vue from "@/components/Tools/Layout2.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tools",
  components: {
    Layout1Vue,
    Layout2Vue,
    Layout3Vue,
  },
  data() {
    return {
      video: false,
      modal: true,
    };
  },
};
</script>

<style scoped>
.hold {
  width: 100%;
  display: flex;
}
.small {
  width: 20%;
  background: #ebf2f6 0% 0% no-repeat padding-box;
  height: 86vh;
  border-right: 2px solid #21455e2e;
}

.nav {
  padding: 30px;
}

.recordings {
  padding: 15px;
  margin: 5px 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
.active {
  background: #e2e5ed 0% 0% no-repeat padding-box;
  border: 1px solid #0dabd838;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.brudcrum {
  text-align: left;
  letter-spacing: 0px;
  color: #637c8e;
}

.big {
  width: 80%;
  height: 79vh;
  overflow-y: scroll;
  padding: 20px 50px;
}

.holdRecord {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  font-size: 20px;
  margin-right: 10px;
  color: #21455e;
}

.rite {
  margin: 0 20px;
}

.holdFilter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.holdDate {
  border: 2px solid #e2e5ed;
  border-radius: 100px;
  overflow: hidden;
}

.date {
  border: none;
  padding: 10px;
  outline: none;
}

.new {
  background-color: #0dabd8;
  border-radius: 28px;
  padding: 10px;
  color: white;
  border: none;
  margin-right: 20px;
  cursor: pointer;
}

.start {
  background-color: #ef5350;
  border-radius: 28px;
  padding: 10px;
  color: white;
  border: none;
}

.holdREC {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
.rec {
  font-size: 5px;
  background-color: white;
  color: black;
  border-radius: 100px;
  padding: 5px 3px;
  margin-right: 10px;
}

.link {
  text-decoration: none;
}

.modalActive {
  display: none;
}
</style>
