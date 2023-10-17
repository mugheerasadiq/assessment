import { Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import style from "./style.module.css"

type Props = {
  loading: boolean,
  children? : React.ReactNode
};

function FullPageLoader({ loading,children }: Props): JSX.Element {
  return (
    <div className={style['full-page-loader']}>
      <Spin spinning={loading} size="large" wrapperClassName={style["full-page-loader"]} style={{zIndex: 100000}}>{children}</Spin>
    </div>
  )
  
}

// PropTypes
FullPageLoader.propTypes = {
  classNames: PropTypes.string,
};

export default FullPageLoader;
