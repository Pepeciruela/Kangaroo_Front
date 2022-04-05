import React from 'react';
import './AboutUsPage.scss';
import LayoutGeneral from '../../../components/LayoutGeneral/LayoutGeneral';

function AboutUsPage() {
  return (
    <LayoutGeneral>
      <div className="container">
        <div id="about-us-page">
          <section className="header">
            <h1 className="title">About us</h1>
          </section>
          <section className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum, lectus ut
              sollicitudin blandit, enim nisi ullamcorper dolor, non porttitor risus sapien et
              magna. Sed ut quam accumsan, lacinia purus quis, ullamcorper nisi. Maecenas eu aliquam
              leo. Nullam tincidunt lobortis dictum. Ut ut tellus sed erat dictum volutpat vitae a
              dui. Aenean rutrum urna lorem, et euismod tortor pellentesque maximus. Nullam sagittis
              facilisis hendrerit. Ut vel aliquam sapien, at consequat quam. Phasellus sed varius
              libero. Etiam lacinia faucibus libero tincidunt suscipit. Ut elementum risus sed risus
              pellentesque, et faucibus est luctus. Fusce quis odio et est vestibulum placerat et a
              sapien. Duis suscipit consequat nunc, vel scelerisque nisi bibendum nec. Sed elementum
              dui quis nunc posuere, non sodales est rutrum.
            </p>

            <p>
              Mauris viverra ullamcorper tincidunt. Nullam vel sagittis metus, eu iaculis libero.
              Vivamus vel leo ut lorem pretium porttitor. Nulla vehicula augue et iaculis convallis.
              Phasellus at efficitur diam, quis feugiat felis. Nulla sem leo, ultricies at pulvinar
              a, lobortis id enim. Nullam a scelerisque risus, ut viverra ipsum. Sed commodo nisi
              odio, eget lacinia metus porttitor nec. Mauris tellus sapien, volutpat et mauris sed,
              rutrum eleifend mi. Nunc libero orci, interdum eu interdum efficitur, mattis a velit.
              Fusce ultricies placerat nulla, non placerat enim sagittis vel. Quisque elementum
              dolor a massa tristique, nec varius quam faucibus. Nullam fermentum ligula vel
              condimentum facilisis. Aliquam dapibus eget ipsum vitae efficitur.
            </p>

            <p>
              Nam ac lectus augue. Maecenas pharetra mauris eu aliquet vulputate. Etiam ac tristique
              lectus. Cras cursus vehicula purus. Nullam sit amet eros vehicula risus feugiat tempor
              sed in sem. Nam maximus diam elit, nec imperdiet urna ultricies non. Suspendisse sed
              sollicitudin massa. Aenean ac pretium neque, non tempus quam. Donec sagittis ac lorem
              cursus eleifend. Sed a euismod nisi. Etiam vel dapibus tortor, vitae aliquam eros. Nam
              dignissim sapien eu nisl malesuada, quis condimentum urna molestie.
            </p>
          </section>
        </div>
      </div>
    </LayoutGeneral>
  );
}

export default AboutUsPage;
