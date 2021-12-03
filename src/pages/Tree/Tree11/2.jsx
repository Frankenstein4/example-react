import React, { useState, useEffect } from 'react';
import { Select, Spin } from 'antd';
import { debounce } from 'lodash';

const { Option } = Select;


const SelectSearch = ({value = [], onChange = () => {}}) => {
  const [total, setTotal] = useState(30);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pageText, setPageText] = useSetState({
    pageNum: 1,
    text: '',
  });

  const timeout = (time, data) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(data), time);
    });

  const requestList = () => {
      return timeout(1000, [...Array(10)].map((item, index) => `${index}+${pageText?.text || ''}`))
        .then((res) => {
          return Promise.resolve(res || []);
        })
        .catch(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject([]);
        });
    };


  const handleScroll = (e) => {
    e.persist(); 
    // 判断滑动到底部
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    return scrollHeight - scrollTop === clientHeight;
  };

  useEffect(() => {
    setLoading(true);
    requestList()
      .then((res) => {
        const resArr = Array.isArray(res) ? res : [];
        setData([...data, ...resArr]);
      })
      .finally(() => setLoading(false));
  }, [pageText]);

  const handlePopupScroll = (e) => {
    // 加载
    if (handleScroll(e) && data.length < total) {
      setPageText((prev) => ({
        pageNum: prev.pageNum + 1,
      }));
    }
  };

  const handleChangeText = (v) => {
    setTotal(0);
    setData([]);
    setPageText({
      text: v,
      pageNum: 1,
    });
  };

  const onSearch = debounce(
    handleChangeText,
    800,
  );

  const renderOptions = data?.map((item) => {
    return (
      <Option value={item} key={item} label={item}>
        {item}
      </Option>
    );
  });

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        onSearch={onSearch}
        notFoundContent={loading ? <Spin size="small" /> : '无'}
        placeholder="请选择"
        onPopupScroll={(e) => {
          handlePopupScroll(e);
        }}
        filterOption={false}
        value={value}
        onSelect={onChange}
      >
        {renderOptions}
      </Select>
    </div>
  );
};
export default SelectSearch;

