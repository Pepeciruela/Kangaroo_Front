import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createAdvertReview, loadAdvertDetail } from '../../store/actions';
import {
  getAdvertDetail,
  getAdverts,
  getCategoryDetail,
  getUi,
  getUserData
} from '../../store/selectors/selectors';
import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import SectionSlider from '../../pages/HomePage/SectionSlider/SectionSlider';
import ReviewStartAndCount from '../../components/ReviewStartAndCount/ReviewStartAndCount';
import { useHistory } from 'react-router-dom';
import ModalReview from '../../components/ModalReview/ModalReview';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { Toaster, toast } from 'react-hot-toast';
import './AdvertPage.scss';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import CustomToaster from '../../components/CustomToaster/CustomToaster';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import NotResultsFound from '../../components/NotResultsFound/NotResultsFound';
import axios from 'axios';
import { createConversation } from '../../api/services/chatServices';
import { Chip } from '@mui/material';

function AdvertPage() {
  const history = useHistory();
  const currentUrl = window.location.href;
  const dispatch = useDispatch();
  const { id: advertId } = useParams();

  const userData = useSelector(getUserData);
  const advert = useSelector((state) => getAdvertDetail(state, advertId));
  const adverts = useSelector((state) => getAdverts(state));
  const { isLoading, error } = useSelector(getUi);

  useEffect(() => {
    if (error) {
      toast.error(`${error.message}: ${error.error}`);
    }
  }, [error]);

  useEffect(() => {
    dispatch(loadAdvertDetail(advertId));
  }, [dispatch, advertId]);

  //Follow
  const handlerFollow = () => {
    alert('implement');
  };

  const handlerMessage = () => {
    createConversation({
      userSenderId: userData._id,
      userReceiverId: advert.author._id,
      advertisementId: advertId
    });

    history.push('/account/messages/');
  };

  return advert ? (
    <LayoutGeneral>
      <>
        {!isLoading ? (
          <div id="advert-page">
            <div className="container">
              <div>
                <img alt="" src={advert.image}></img>
              </div>

              <div className="grid">
                <div className="col-left">
                  <div className="header">
                    <h1>{advert.name}</h1>
                  </div>

                  <div className="body">
                    <div>
                      <h3>Description</h3>
                      <p>{advert.description}</p>
                    </div>

                    <div>
                      <h3>Tags</h3>
                      <div className="tags">
                        {advert?.tags.map((tag, index) => (
                          <Chip key={index} label={`${tag}`} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <div>
                        <h3> Reviews ({advert.reviews.length})</h3>
                        {advert?.reviews.map((review) => (
                          <ReviewCard key={review._id} review={review} author={advert.author} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-right">
                  <div className="card">
                    <Link className="avatar-content" to={`/user/${advert?.author._id}`}>
                      <div>
                        <img alt={advert?.author.name} src={advert?.author.imageAvatar}></img>
                      </div>
                      <div>
                        <p>{advert.author.name}</p>
                        <ReviewStartAndCount reviewCount={45} reviewStart={3.5} />
                      </div>
                    </Link>

                    <div className="buttons-group">
                      {/* <Button secondaryOutline full onClick={handlerFollow}>
                        Follow
                      </Button> */}
                      <Button secondary full onClick={handlerMessage}>
                        Send Message
                      </Button>
                    </div>

                    <div className="social-icons">
                      <h4>Share product:</h4>
                      <div className="icons-row">
                        <EmailShareButton url={currentUrl}>
                          <EmailIcon size={40} round={true} />
                        </EmailShareButton>

                        <FacebookShareButton
                          url={currentUrl}
                          quote={'Title'}
                          hashtag={'#segundamano, #coche'}
                        >
                          <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>

                        <TelegramShareButton url={currentUrl} title={advert.name}>
                          <TelegramIcon size={40} round={true} />
                        </TelegramShareButton>

                        <LinkedinShareButton
                          url={currentUrl}
                          title={advert.name}
                          summary={advert.description}
                          source={'https://kangaroostore.es'}
                        >
                          <LinkedinIcon size={40} round={true} />
                        </LinkedinShareButton>

                        <TwitterShareButton
                          url={currentUrl}
                          quote={'Title'}
                          hashtag={'#segundamano, #coche'}
                        >
                          <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>

                        <WhatsappShareButton url={currentUrl}>
                          <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <SectionSlider
                adverts={adverts}
                title={'Similar products that may interest you'}
                subtitle={'Discover the most desired of the moment'}
                limit={4}
              />
            </div>
          </div>
        ) : (
          !isLoading && <NotResultsFound />
        )}
        {/*Loading and errors */}
        {isLoading && <LoadingBox />}
        {error && <CustomToaster />}
      </>
    </LayoutGeneral>
  ) : (
    <div>El anuncio no existe</div>
  );
}

export default AdvertPage;
