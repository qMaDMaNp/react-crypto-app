import React from 'react';
import { Row, Col, Typography, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Cryptocurrencies, News } from './';

import { useGetCoinsQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCoinsQuery(10);

  if (isFetching) return 'Loading...';

  const coinStats = data?.stats;

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(coinStats.total)}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={coinStats.totalExchanges}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(coinStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(coinStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(coinStats.totalMarkets)}/></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <News simlified/>
    </>
  )
}

export default Homepage