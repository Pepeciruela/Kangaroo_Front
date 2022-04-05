import React from 'react';
import { Link } from 'react-router-dom';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ProductsPage.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabAllProducts from './TabsProducts/TabAllProducts';
import TabProductsFinished from './TabsProducts/TabProductsFinished';
import TabProductsForSale from './TabsProducts/TabProductsForSale';
import TabProductsInactive from './TabsProducts/TabProductsInactive';
import TabProductsPurchased from './TabsProducts/TabProductsPurchased';

function ProductsPage() {
  return (
    <LayoutAccount
      title={'Your Products'}
      subtitle={'Lorem ipsum dolor sit amet, consectetur'}
      haveButton={true}
      textButton={`Create new product`}
      urlButton={'/account/products/create/new-product'}
    >
      <div id="products-page">
        <Tabs>
          <TabList>
            <Tab>All Products</Tab>
            <Tab>For Sale</Tab>
            <Tab>Finished</Tab>
            <Tab>Inactive</Tab>
            {/* <Tab>Purchased</Tab> */}
          </TabList>
          <div className="account-container">
            <TabPanel>
              <TabAllProducts />
            </TabPanel>
            <TabPanel>
              <TabProductsForSale />
            </TabPanel>
            <TabPanel>
              <TabProductsFinished />
            </TabPanel>
            <TabPanel>
              <TabProductsInactive />
            </TabPanel>
            {/* Implement */}
            {/* <TabPanel>
              <TabProductsPurchased />
            </TabPanel> */}
          </div>
        </Tabs>
      </div>
    </LayoutAccount>
  );
}

export default ProductsPage;
