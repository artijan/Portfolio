import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Detail() {
  const { scroll } = useLocomotiveScroll();

  return (
    <>
      <div className="detail_container">
        <div className="text-main">
          <div className="main">상세이미지 디자인</div>
          <div className="sub">
            컨텐츠 계약업체 관리,
            <br />
            제품 입/출고 관리 및 촬영,
            <br />
            컴퓨터 카테고리 제품 상세이미지 제작
          </div>
        </div>

        <div className="image">
          <img src="images/page1_brief.jpg" alt="" />
          <div className="image-text">
            컨텐츠 계약 업체 관리/커뮤니케이션을 포함하여, 상세이미지 제작에
            필요한 실 제품의 입/출고 관리를 진행하였습니다.
            <br />
            입고된 실 제품은 자체 스튜디오에서 촬영을 진행하였으며, 촬영된
            이미지로 상세이미지를 제작하였습니다.
          </div>
        </div>

        <div
          className="image"
          data-scroll-position="bottom"
          data-scroll-speed="1"
          data-scroll-direction="horizontal"
        >
          <img src="images/page1_brief.jpg" alt="" />
          <div className="image-text">
            컨텐츠 계약 업체 관리/커뮤니케이션을 포함하여, 상세이미지 제작에
            필요한 실 제품의 입/출고 관리를 진행하였습니다.
            <br />
            입고된 실 제품은 자체 스튜디오에서 촬영을 진행하였으며, 촬영된
            이미지로 상세이미지를 제작하였습니다.
          </div>
        </div>

        <div className="image" data-scroll-speed="2">
          <div className="grid">
            <img src="images/page1_brief.jpg" alt="" />
            <img src="images/page1_brief.jpg" alt="" />
            <img src="images/page1_brief.jpg" alt="" />
          </div>

          <div className="image-text">
            컨텐츠 계약 업체 관리/커뮤니케이션을 포함하여, 상세이미지 제작에
            필요한 실 제품의 입/출고 관리를 진행하였습니다.
            <br />
            입고된 실 제품은 자체 스튜디오에서 촬영을 진행하였으며, 촬영된
            이미지로 상세이미지를 제작하였습니다.
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
