<template>
<table>
  <thead>
    <th>
      <td>title</td>
      <td>keyword</td>
      <td>channel</td>
      <td>duration</td>
      <td>framerate</td>
      <td>hd</td>
      <td>addtime</td>
      <td>viewnumber</td>
      <td>likes</td>
      <td>dislikes</td>
      <td>video_url</td>
      <td>embedded_url</td>
      <td>preview_url</td>
      <td>preview_video_url</td>
      <td>private</td>
      <td>vid</td>
      <td>uid</td>
    </th>
  </thead>
  <tbody>
    <tr>
      <td>{{video.title}}</td>
      <td>{{video.keyword}}</td>
      <td>{{video.channel}}</td>
      <td>{{video.duration}}</td>
      <td>{{video.framerate}}</td>
      <td>{{video.hd}}</td>
      <td>{{video.addtime}}</td>
      <td>{{video.viewnumber}}</td>
      <td>{{video.likes}}</td>
      <td>{{video.dislikes}}</td>
      <td>{{video.video_url}}</td>
      <td>{{video.embedded_url}}</td>
      <td>{{video.preview_url}}</td>
      <td>{{video.preview_video_url}}</td>
      <td>{{video.private}}</td>
      <td>{{video.vid}}</td>
      <td>{{video.uid}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from "axios";
export default {
  name: "video",
  data() {
    return {
      video: [],
    };
  },
  beforeMount() {
    this.get_list();
  },
  methods: {
    get_list() {
      axios
        .get("https://api.avgle.com/v1/video/608340")
        .then(({ data }) => {
          this.video = data.response.video;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>