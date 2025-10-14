<!-- 可直接放到页面中；若已全局有 .yz-section / h2 等样式，也可以只保留 .yz-awards 的部分 -->
<style>
  /* 高级视觉与字体（与主页一致） */
  .yz-section.yz-awards {
    background-color: #f5f7fa;
    padding: 22px 30px;
    margin-bottom: 28px;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    font-family: Georgia, Cambria, "Times New Roman", serif;
    color: #000000;
    line-height: 1.9;
    transition: all 0.25s ease-in-out;
  }
  .yz-section.yz-awards h2 {
    color: #B22222;
    font-family: Georgia, Cambria, "Times New Roman", serif;
    font-weight: bold;
    border-bottom: 1px solid #d0d0d0;
    padding-bottom: 4px;
    margin-top: 0;
  }
  .yz-section.yz-awards p {
    margin: 6px 0;
    /* 小屏默认正常换行，避免溢出 */
    white-space: normal;
    word-break: normal;
  }
  .yz-section.yz-awards .bullet {
    color: black;
    font-weight: bold;
    margin-right: 8px;
  }
  /* 大屏：强制整行不换行，视觉更利落 */
  @media (min-width: 992px) {
    .yz-section.yz-awards p {
      white-space: nowrap;
      word-break: keep-all; /* 避免在英文单词中间硬断 */
    }
  }
</style>

<div class="yz-section yz-awards">
  <h2>Awards and Honors</h2>

  <p><span class="bullet">■</span> IEEE AP-S Young Professional Ambassador, 2024.</p>
  <p><span class="bullet">■</span> Young Antenna Scientist Award (Best Paper), Singapore Workshop on Antennas, 2023.</p>
  <p><span class="bullet">■</span> IEEE Antennas and Propagation Society Fellowship Program Award, 2023.</p>
  <p><span class="bullet">■</span> IEEE Antennas and Propagation Society TICRA Foundation Grant, 2023.</p>
  <p><span class="bullet">■</span> HKTIIT Post-Graduate Excellence Scholarship, 2020.</p>
  <p><span class="bullet">■</span> Full PhD Studentship, Hong Kong University of Science and Technology, 2017–2021.</p>
  <p><span class="bullet">■</span> Research Travel Grant, HKUST, 2018, 2020.</p>
  <p><span class="bullet">■</span> National Scholarship, Huazhong University of Science and Technology, 2017.</p>
</div>
