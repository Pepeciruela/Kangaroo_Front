import SidebarAccount from '../SidebarAccount/SidebarAccount';
import Navbar from '../Navbar/Navbar';
import './LayoutAccount.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function LayoutAccount({
  title,
  subtitle,
  children,
  background = true,
  haveButton,
  textButton,
  urlButton
}) {
  return (
    <div id="layout-account">
      <Navbar />
      <div className="layout-account-body">
        <SidebarAccount />
        <main>
          <div className="header">
            <div>
              <h2>{title}</h2>
              <h5>{subtitle}</h5>
            </div>
            {haveButton && (
              <div>
                <Link to={`${urlButton}`}>
                  <Button secondary>{textButton}</Button>
                </Link>
              </div>
            )}
          </div>
          <div className={background ? 'body-container' : ''}>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default LayoutAccount;
