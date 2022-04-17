<template>
  <section class="banner-section padding">

    <div class="container">
      <div class="row banner-wrapper">
        <div class="col-md-6">
          <div class="banner-item">
            <img src="~/static/images/banner/01.jpg" alt="banner">
            <div class="banner-content">
              <h3>-50% Off Now!</h3>
              <h2>Discount For Delicious <br>Tasty Burgers!</h2>
              <p>Sale off 50% only this week</p>
              <a href="#" class="order-btn">Order Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <div class="banner-item">
                <img src="~/static/images/banner/02.jpg" alt="banner">
                <div class="banner-content">
                  <h3>Delicious <br> Pizza</h3>
                  <p>50% off Now</p>
                  <a href="#" class="order-btn">Order Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="banner-item">
                <img src="~/static/images/banner/03.jpg" alt="banner">
                <div class="banner-content">
                  <h3>American <br>Burgers</h3>
                  <p>50% off Now</p>
                  <a href="#" class="order-btn">Order Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="banner-item">
                <img src="~/static/images/banner/04.jpg" alt="banner">
                <div class="banner-content">
                  <h3>Tasty Buzzed <br>Pizza</h3>
                  <p>Sale off 50% only this week</p>
                  <a href="#" class="order-btn">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style>
.banner-section {
  position: relative;
}
.banner-item {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.banner-item:hover img {
  transform: scale(1.02);
}
.banner-item img {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}
.banner-content {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.banner-content h3 {
  color: #fff;
  font-size: 32px;
  line-height: 34px;
}
.banner-content h2, .banner-content p {
  color: #fff;
}
.banner-content .order-btn {
  background-color: #ff8e28;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 25px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0;
  transition: all 0.5s ease-in-out;
}
.banner-content .order-btn:hover {
  background-color: #0e1318;
  color: #fff;
  transition: all 0.5s ease-in-out;
}
.banner-wrapper .row > div:last-child .banner-content {
  left: 55%;
}
</style>
