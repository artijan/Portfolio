import React from "react";

function Detail() {
  return (
    <>
      <div data-scroll-section className="detail_container">
        <div className="text-main">
          <div className="main">상세이미지 디자인</div>
        </div>

        <div data-scroll data-scroll-speed="2" className="image">
          <img src="images/page1_brief.jpg" alt="" />
          <div data-scroll data-scroll-speed="0.5" className="image-text">
            컨텐츠 계약 업체 관리/커뮤니케이션을 포함하여, 상세이미지 제작에
            필요한 실 제품의 입/출고 관리를 진행하였습니다.
            <br />
            입고된 실 제품은 자체 스튜디오에서 촬영을 진행하였으며, 촬영된
            이미지로 상세이미지를 제작하였습니다.
          </div>
        </div>

        <div data-scroll data-scroll-speed="0.5" className="image">
          <img src="images/page1_brief.jpg" alt="" />
          <div className="image-text">
            컨텐츠 계약 업체 관리/커뮤니케이션을 포함하여, 상세이미지 제작에
            필요한 실 제품의 입/출고 관리를 진행하였습니다.
            <br />
            입고된 실 제품은 자체 스튜디오에서 촬영을 진행하였으며, 촬영된
            이미지로 상세이미지를 제작하였습니다.
          </div>
        </div>

        <div data-scroll className="image">
          <div data-scroll className="images">
            <img
              data-scroll
              data-scroll-speed="1"
              className="img1"
              src=""
              alt=""
            />
            <img
              data-scroll
              data-scroll-speed="2"
              className="img2"
              src=""
              alt=""
            />
            <img
              data-scroll
              data-scroll-speed="3"
              className="img3"
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
