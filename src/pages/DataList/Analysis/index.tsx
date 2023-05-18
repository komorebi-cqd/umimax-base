import DataColumn from '../components/DataColumn';
import DataTable from '../components/DataTable';
import DefaultHead from '../components/DefaultHead';
import MultipleLine from '../components/MultipleLine';

const Analysis = () => {
  return (
    <div>
      <DefaultHead title="退货数据分析" />
      <div className="bg-white rounded-md h-80">
        <DataColumn title="退款订单数量" />
      </div>
      <div className="bg-white rounded-md h-80 mt-2">
        <MultipleLine title="退款订单数量" />
      </div>
      <div className=" grid grid-cols-2 gap-4">
        <div className="bg-white rounded-md h-80 mt-2">
          <DataTable title="Chargeback Order Currency TOP10"/>
        </div>
        <div className="bg-white rounded-md h-80 mt-2">
          <DataTable title="Chargeback Order Currency Amount TOP10"/>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
