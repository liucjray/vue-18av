<template>
  <div>
    <el-tabs
      style="100%"
      type="card"
      tabPosition="left"
      v-model="activeCHID"
      @tab-click="switchCategory"
    >
      <el-tab-pane
        v-for="category in categories"
        :key="category.CHID"
        :label="category.shortname"
        :name="category.CHID"
      >
        <el-pagination
          style="width: 50%"
          background
          layout="prev, pager, next"
          :page-size="videosLimit"
          :total="videosTotal"
          @current-change="vidoePageClick"
          @prev-click="videosPrevClick"
          @next-click="videosNextClick"
        >
        </el-pagination>
        <el-table
          style="width: 50%"
          :data="videos"
          v-loading="isLoading"
          element-loading-text="載入中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <el-table-column prop="preview_url" label="預覽圖">
            <template slot-scope="scope">
              <a target="_blank" :href="scope.row.video_url">
                <img :src="scope.row.preview_url" height="80" />
              </a>
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            label="片名"
            width="500px"
          ></el-table-column>
          <el-table-column prop="duration" label="時長">
            <template slot-scope="scope">
              <el-button icon="el-icon-timer" effect="dark">
                {{ scope.row.duration }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "categories",
  data() {
    return {
      // 是否讀取
      isLoading: false,
      // 影片分類
      activeCHID: "1",
      categories: [],
      // 影片
      videos: [],
      videosLimit: 8,
      videosTotal: 0,
      videosCurrentPage: 0,
    };
  },
  beforeMount() {
    // 取得分類
    this.getCategories();
    // 預設第一個分類
    this.switchCategory(this.activeCHID);
  },
  methods: {
    switchCategory() {
      this.videosCurrentPage = 0;
      this.getVideos();
    },
    getCategories() {
      this.isLoading = true;
      axios
        .get("https://api.avgle.com/v1/categories")
        .then(({ data }) => {
          this.isLoading = data.success != true;
          this.categories = data.response.categories;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getVideos() {
      this.isLoading = true;
      let url = `https://api.avgle.com/v1/videos/${this.videosCurrentPage}?c=${this.activeCHID}&limit=${this.videosLimit}`;
      console.log(url);
      axios
        .get(url)
        .then(({ data }) => {
          this.isLoading = data.success != true;
          this.videosTotal = data.response.total_videos;
          this.videos = data.response.videos;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    videosPrevClick() {
      this.videosCurrentPage -= 1;
      this.getVideos();
    },
    videosNextClick() {
      this.videosCurrentPage += 1;
      this.getVideos();
    },
    vidoePageClick(page) {
      this.videosCurrentPage = page - 1;
      this.getVideos();
    },
  },
  computed: {
    transformHumanTIme(seconds) {
      return seconds;
    },
  },
};
</script>