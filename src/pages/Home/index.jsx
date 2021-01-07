import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';

import './index.sass';

import BannerImg1 from '../../assets/imgs/home/banner1.png';
import BannerMobileHome from '../../assets/imgs/home/mobile-home-banner.png';
import Step1Img from '../../assets/imgs/home/step1.png';
import Step2Img from '../../assets/imgs/home/step2.png';
import Step3Img from '../../assets/imgs/home/step3.png';
import TopIconImg from '../../assets/imgs/home/t.png';
import BottomIconImg from '../../assets/imgs/home/b.png';
import AboutList1 from '../../assets/imgs/home/aboutList1.png';
import AboutList2 from '../../assets/imgs/home/aboutList2.png';
import AboutList3 from '../../assets/imgs/home/aboutList3.png';

import UseOccheck from '../../components/UseOccheck';
import UploadFile from '../../components/UploadFile';
import CommentList from '../../components/CommentsList';


export default function Home () {
  const [qaIndex, setQaIndex] = useState(0)
  const qData = [
    '本网站检测资质问题',
    'Turnitin国际版与TurnitinUK版有什么区别？如何选择？',
    '你们的查重都是免费使用吗？',
    '检测后会不会被Turnitin收录，导致下次检测重复率高？',
    '抄袭率一般低于多少算合格？',
    '关于检测时间问题',
    'Turnitin常见的修改相似的方法有哪些？',
    '关于检测报告问题（如何看检测报告单）',
    'Turnitin论文检测系统的数据库有多大？',
    'Reference要不要检测？'
  ]
  const aData = [
    ' TurnitinUK是专为UK大学开发的，90%以上的UK大学都是使用TurnitinUK系统； Turnitin国际版与TurnitinUK的学生数据库有差别，因此检测的结果会不一样。 Turnitin国际版：使用范围最大，中国、美国、加拿大、澳洲、美洲、亚洲、欧洲（除英国外）、非洲、香港、澳门、台湾等世界上126个国家的学校都是使用这个系统来检测，Turnitin-UK版只有英国（UK）的大学使用。目前中国也有部分大学引进了Turnitin国际版系统来检测外语系的论文； 如果是在英国（UK）留学的请选择TurnitinUK来检测，在其他国家留学的请选择Turnitin国际版检测。也就是在英国留学的同学一定要选择TurnitinUK系统，不是在英国留学的都是选择Turnitin国际版； 如果需要到国际期刊（如EI、SCI）上发表论文，需要提前检测，请选择Turnitin国际版检测，Turnitin国际版还支持多语种检测，如中文、日语、西班牙语、德语、俄语、法语等小语种； 国内大学的中文学位论文检测，请使用国际版检测。',
    'TurnitinUK是专为UK大学开发的，90%以上的UK大学都是使用TurnitinUK系统； Turnitin国际版与TurnitinUK的学生数据库有差别，因此检测的结果会不一样。 Turnitin国际版：使用范围最大，中国、美国、加拿大、澳洲、美洲、亚洲、欧洲（除英国外）、非洲、香港、澳门、台湾等世界上126个国家的学校都是使用这个系统来检测，Turnitin-UK版只有英国（UK）的大学使用。目前中国也有部分大学引进了Turnitin国际版系统来检测外语系的论文； 如果是在英国（UK）留学的请选择TurnitinUK来检测，在其他国家留学的请选择Turnitin国际版检测。也就是在英国留学的同学一定要选择TurnitinUK系统，不是在英国留学的都是选择Turnitin国际版； 如果需要到国际期刊（如EI、SCI）上发表论文，需要提前检测，请选择Turnitin国际版检测，Turnitin国际版还支持多语种检测，如中文、日语、西班牙语、德语、俄语、法语等小语种； 国内大学的中文学位论文检测，请使用国际版检测。',
    '对的，我们为留学生提供全免费使用的查重与修改语法服务',
    'OCcheck提供检测服务的检测接口为iParadigms官方特别定制接口，所检测论文不会被Turnitin数据库收录，请放心使用。 无论检测一次还是检测多次都不会被收录入库。',
    '一般检测为15-30分钟即可出结果。如果字数多的文章会稍微延长一些。',
    '系统提供HTML格式的检测结果报告，报告将标记抄袭的文字、抄袭来源、抄袭百分比（如下方图示显示），方便后期修改，通过学校检测。 带颜色的单词或者阴影的部分都是存在相似重复的，降低重复率必须修改这一部分； html文件中，同一颜色且标号相同的来源于“sources”中同一出处； "paper text"中，序号1、2、3...与“sources”部分序号1、2、3...一一对应的； Similarity Index指的是论文最终的重复率，其中包含互联网來源、出版物、学生文稿； Internet Sources指的是billions of active and archived web pages from the internet； Publications指的是a repository of frequently updated content from professional journals, periodicals, and publications；Student papers指的是a repository of papers previously submitted by Turnitin users；因为同一处文字以上三处都能检测到，所以三者相加的结果要超过相似度指标，三者可能存在交集，不是简单的叠加关系。',
    'Turnitin系统检测对比数据库： 1.5亿的海量论文数据库；90000多种世界知名期刊杂志数据库；200多亿的网页数据库； 目前全世界超过10000所世界知名教育机构、超过2千万学生，1百万导师在使用Turnitin检测系统进行论文检测。',
    '这一般由学校或者期刊编辑部来定； 低一些自然比较好，低于10%比较稳妥，但是有的学校对重复率有要求，过低也不符合要求。不同学校、不同专业学科之间，重复率也不能一概而论，请咨询学校、老师或者上届学长。',
    '尽管Reference是一些固定的论文题目等，基本上检测都是重复且无法修改。不过，最好检测提交到学校的最终版本，能整体把握论文的重复率，避免含reference的版本提交到学校重复率过高；只检测正文可能出现某些文字无法查到。为了保持跟学校的检测一致，最好提交学校正式版本。',
    '一般手法为替换句子中的关键字、关键字用同义替换。但是对专业性的论文有许多专业术语，无法替换，效果不明显；最好的方式是于OCcheck客服进行沟通，他们将为您匹配最合适的老师进行论文修改与润色，一般会使最终得分提高30%-50%。'
  ]

  return (
    <div className='home'>
      <div className="banner">
        <div className="banner-wrapper">
          <div className="banner-doc">
            <h1>每 2 篇 留学生的 Essay </h1>
            <h1>就有 1 篇使用 OCcheck</h1>
            <h3>英美澳加留学生都在用的免费查重工具</h3>
          </div>
          <img src={BannerImg1} width='100%' alt="" className='just-pc' />
          <img src={BannerMobileHome} width='100%' style={{ marginTop: 30}} alt="" className='just-mobile' />
        </div>
      </div>
      <div className="step container just-pc">
        <Row>
          <Col span={8} className='step-col'>
            <div className="step-text">Step 1</div>
            <div>上传需要查重的文档</div>
            <div>上传文档时，需填写您的邮箱，用于接收查重结果</div>
            <img src={Step1Img} alt="" />
          </Col>
          <Col span={8} className='step-col'>
            <div className="step-text">Step 2</div>
            <div>等待查重结果</div>
            <div>成功上传后，我们将在15-30分钟内将结果发送至您的邮箱，请您耐心等待</div>
            <img src={Step2Img} alt="" />
          </Col>
          <Col span={8} className='step-col'>
            <div className="step-text">Step 3</div>
            <div>接收查重语法审核报告</div>
            <div>查重结果出来后将自动发送到您的邮箱。您将通过您的注册邮箱来接收您的查重及语法报告</div>
            <img src={Step3Img} alt="" />
          </Col>
        </Row>
      </div>
      <div className="mc">
        <div className="mobile-step step just-mobile">
          <div className="flex flex-between">
            <div className='step-col' style={{ width: '50%'}}>
              <div className="step-text">Step 1</div>
              <div>上传需要查重的文档</div>
              <div>上传文档时，需填写您的邮箱，用于接收查重结果</div>
            </div>
            <img src={Step1Img} alt="" width="120px" />
          </div>
          <div className="flex flex-between" style={{ marginTop: 40}}>
            <img src={Step2Img} alt="" width="120px" />
            <div className='step-col' style={{ width: '50%'}}>
              <div className="step-text">Step 2</div>
              <div>等待查重结果</div>
              <div>成功上传后，我们将在15-30分钟内将结果发送至您的邮箱，请您耐心等待</div>
            </div>
          </div>
          <div className="flex flex-between" style={{ marginTop: 40}}>
            <div className='step-col' style={{ width: '50%'}}>
              <div className="step-text">Step 3</div>
              <div>接收查重语法审核报告</div>
              <div>查重结果出来后将自动发送到您的邮箱。您将通过您的注册邮箱来接收您的查重及语法报告</div>
            </div>
            <img src={Step2Img} alt="" width="120px" />
          </div>
        </div>
      <div style={{ marginTop: '62px'}}>
        <UploadFile />
      </div>
      <div className="about container">
        <div className="title text-center">关于OCcheck</div>
        <div className="about-top-icon">
          <img src={TopIconImg} alt="" />
        </div>
        <div className="about-content">
          OCcheck.com是一家专注于留学生课程辅导与论文润色的学术平台，由硅谷著名天使基金KPCB创始人托姆斯·铂金斯(Thomas Perkins)投资，旗下拥有产品OCcheck（Oxford&Cambridge Check）免费论文检测系统基于大数据海量学术文献资源及互联网资源，与Turnitin、Grammaly、知网等国内外大型论文学术检测机构深度授权合作，坚持客观、公正、精准、全面的原则，对学术不端行为进行管理，为用户提供客观详实的查重报告，为出版、科研、学术等提供支持。
        </div>
        <div className="about-bottom-icon">
          <img src={BottomIconImg} alt="" />
        </div>
        <div className="sub-title" style={{ fontSize: "30px"}}>一站式免费查重及语法检查和预打分服务</div>
        <div>
          <ul className="about-ul">
            <li>提供免费Turnitin（国际版、UK版）查重报告</li>
            <li>提供免费Grammaly（高级版）语法检测报告</li>
            <li>短时间内通过AIspring全球博士数据库匹配专家对论文进行打分评估</li>
          </ul>
        </div>
      </div>
      <div className='about-panel container just-pc'>
        <Row>
          <Col span={ 8 }>
            <div className="oc-shadow text-center">
              <img src={AboutList1} alt="" />
              <div className="about-panel-title">Turnitin论文查重</div>
              <p>是全球最权威的学术论文检测工具类系统，它通过大部分主流浏览器接入互联网，将用户提交的文稿与Turnitin背后海量的全球数据库和网页内容作比对，以很快的速度得出一个相似度比例和涵盖大量相关信息的‘原创性报告’给评审者，评审者能够根据这些Turnitin精确定位出的文稿中非原创的内容，对文稿整体的原创性作出一个客观判断
              </p>
            </div>
          </Col>
          <Col span={ 8 }>
            <div className="oc-shadow text-center">
              <img src={AboutList2} alt="" />
              <div className="about-panel-title">Grammaly语法检测</div>
              <p>
                                Grammarly是顶级的在线语法纠正和校对工具
它能够通过AI仿生语言学对论文进行单词拼写检查、标点符号纠正、语法错误修正、语气调整以及风格建议给出等；对学术写作来说，Grammarly还可以进行学术建议
                            </p>
            </div>
          </Col>
          <Col span={ 8 }>
            <div className="oc-shadow text-center">
              <img src={AboutList3} alt="" />
              <div className="about-panel-title">AIspring全球博士打分系统</div>
              <p>AIspring是于2019年底由斯坦福大学Keller&Ponic人工交互实验室发布的下一代智能数据库，我司通过Dr.Keller授权，获得首批全球使用权并应用于论文打分工作中。系统结合全球签约博士与大数据分析，对论文进行详实考核，并打出预估分数，为留学生提供精准的修改参考</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className='about-panel container just-mobile'>
        <div>
          <div>
            <div className="oc-shadow text-center">
              <img src={AboutList1} alt="" />
              <div className="about-panel-title">Turnitin论文查重</div>
              <p>是全球最权威的学术论文检测工具类系统，它通过大部分主流浏览器接入互联网，将用户提交的文稿与Turnitin背后海量的全球数据库和网页内容作比对，以很快的速度得出一个相似度比例和涵盖大量相关信息的‘原创性报告’给评审者，评审者能够根据这些Turnitin精确定位出的文稿中非原创的内容，对文稿整体的原创性作出一个客观判断
              </p>
            </div>
          </div>
          <div>
            <div className="oc-shadow text-center">
              <img src={AboutList2} alt="" />
              <div className="about-panel-title">Grammaly语法检测</div>
              <p>
                                Grammarly是顶级的在线语法纠正和校对工具
它能够通过AI仿生语言学对论文进行单词拼写检查、标点符号纠正、语法错误修正、语气调整以及风格建议给出等；对学术写作来说，Grammarly还可以进行学术建议
                            </p>
            </div>
          </div>
          <div>
            <div className="oc-shadow text-center">
              <img src={AboutList3} alt="" />
              <div className="about-panel-title">AIspring全球博士打分系统</div>
              <p>AIspring是于2019年底由斯坦福大学Keller&Ponic人工交互实验室发布的下一代智能数据库，我司通过Dr.Keller授权，获得首批全球使用权并应用于论文打分工作中。系统结合全球签约博士与大数据分析，对论文进行详实考核，并打出预估分数，为留学生提供精准的修改参考</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="home-comment">
        <div className="title text-center">用户评价</div>
        <CommentList />
        <Link to="/comments" className='more oc-btn'>MORE</Link>
      </div>
      <div className="qa container">
        <Row>
          <Col span={ 12 }>
            <div className="oc-shadow q-content">
              <ul>
              { qData.map((item, idx) => 
                <li
                  key={item}
                  className={idx === qaIndex ? 'open' : 'close'}
                  onClick={ () => setQaIndex(idx) }
                >{ item }</li>
              )}
              </ul>
            </div>
          </Col>
          <Col span={ 12 }>
            <div className="oc-shadow a-content">
              { aData[qaIndex] }
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
