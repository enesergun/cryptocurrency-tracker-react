import React from 'react';

import {Github, Twitter, Facebook, Reddit, Forum} from '../Constants/icons/SocialMediaIcons';

const CoinInformation = ({data}) => {
  return (
    <div className="animate__animated animate__backInRight CoinInformation">
          <div className='InformationContainer'>
            <h1>Info</h1>
            <div className='info'>
              <div className='info-item'>
                <div className="title">homepage</div>
                <div className="title-link">
                  <a href={data?.links.homepage} target="_blank"> {data?.id}</a>
                </div>
              </div>

              <div className='info-item'>
                <div className="title">github</div>
                <div className="title-link">
                  <a href={data?.links.repos_url.github[0]} target="_blank"> <Github /> github</a>
                </div>
              </div>

              <div className='info-item'>
                <div className="title">twitter</div>
                <div className="title-link">
                  <a href={`https://twitter.com/${data?.links.twitter_screen_name}`} target="_blank" rel="noopener noreferrer"> <Twitter /> twitter</a>
                </div>
              </div>

              <div className='info-item'>
                <div className="title">facebook</div>
                <div className="title-link">
                  <a href={`https://www.facebook.com/${data?.links.facebook_username}`} target="_blank" rel="noopener noreferrer"> <Facebook /> facebook</a>
                </div>
              </div>
              <div className='info-item'>
                <div className="title">reddit</div>
                <div className="title-link"><a href={data?.links.subreddit_url} target="_blank" rel="noopener noreferrer"> <Reddit /> reddit</a></div>
              </div>
              <div className='info-item'>
                <div className="title">official forum</div>
                <div className="title-link"><a href={data?.links.official_forum_url} target="_blank" rel="noopener noreferrer"> <Forum /> forum</a></div>
              </div>
            </div>                                
          </div>
        </div>
  )
}

export default CoinInformation