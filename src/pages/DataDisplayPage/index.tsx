import React from 'react';
import DataBlocks from '@/components/Data/DataBlocks';
import PageContent from '@/components/Layouts/PageContent';


interface IProps {}
const DataDisplayPage: React.FC<IProps> = (props) => {
  return (
    <>
      <PageContent
        headerText="数据展示"
        headerRoute="/data"
        className="datapage-content"
      >
        <DataBlocks />
      </PageContent>
    </>
  );
};
export default DataDisplayPage;
