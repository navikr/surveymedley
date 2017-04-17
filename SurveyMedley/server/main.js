import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if(Updates.find().count()==0)
    {
        Updates.insert(
          {
                title:"Applications are the face of your business",
                subject:"In the Application Economy, every business is in the software business. Which means your success depends on delivering applications that delight your users...every time. CA has helped thousands of companies adapt and thrive in this new reality. We look forward to doing the same for you.",
                img_src:"applicationEconomy.jpg"
          });
          Updates.insert(
            {
                  title:"Democracy, Driven by Data",
                  subject:"Power in the hands of the people. In today’s always-on world, voters demand to stay connected to the stories, trends and candidates that directly affect them—so they can elect the leaders that best represent them. It’s this reality that spurred the creation of the CNN Politics app, built with CA Technologies. Now voters have unprecedented access to deep data insight and instantaneous analysis, keeping them engaged and informed like never before.",
                  img_src:"democracy.jpg"
            });
            Updates.insert(
              {
                    title:"Continuous Delivery",
                    subject:"Release the apps your customers want, at the pace they demand. To compete in today’s application economy, you need a development lifecycle that delivers quality functionality faster. Continuous delivery tools from CA provides a zero-touch workflow with the integrations, analytics and feedback loops required to streamline application delivery.  With Continuous Delivery from CA, you can develop swiftly, test agilely, release reliably–and achieve a true competitive advantage.",
                    img_src:"continuousDelivery.png"
              });
              Updates.insert(
                {
                      title:"Manage & Monitor",
                      subject:"Maximize visibility into your apps, services and infrastructure—all the way to the mainframe.",
                      img_src:"mandm.jpg"
                });
        }//end of parent if
        if(Surveys.find().count()==0)
          {
              Surveys.insert(
                {
                      OSAT:null,
                      caseId:"00123",
                      OSATWithProduct:null,
                      LTR:null,
                      siteId:123,
                      productID:"PD1345",
                      productName:"CA Release Automation",
                      contactSupportEasy:null,
                      promptResponse:null,
                      amountOfTime:null,
                      helpInfomration:null,
                      easeOfUse:null,
                      OSATwithAgent:null,
                      understand:null,
                      techSkills:null,
                      communication:null,
                      expectation:null,
                      guidance:null,
                      phone:false,
                      webSupport:false,
                      chat:false,
                      knowledgeDB:false,
                      communities:false,
                      None:false,
                      pResolution:"",
                      effortExp:"",
                      Qualities:"",
                      comments:"",
                      responseDate:"",
                      issueOpenDate:"",
                      issueCloseDate:"",
                      technician:"jaisa05",
                      issueTitle:"Artifact distribution failing",
                      status:SurveyStatus.Incompleted

                });
                Surveys.insert(
                  {
                        OSAT:null,
                        caseId:"00133",
                        OSATWithProduct:null,
                        LTR:null,
                        siteId:123,
                        productID:"PD1345",
                        productName:"CA Release Automation",
                        contactSupportEasy:null,
                        promptResponse:null,
                        amountOfTime:null,
                        helpInfomration:null,
                        easeOfUse:null,
                        OSATwithAgent:null,
                        understand:null,
                        techSkills:null,
                        communication:null,
                        expectation:null,
                        guidance:null,
                        phone:false,
                        webSupport:false,
                        chat:false,
                        knowledgeDB:false,
                        communities:false,
                        None:false,
                        pResolution:"",
                        effortExp:"",
                        Qualities:"",
                        comments:"",
                        responseDate:"",
                        issueOpenDate:"",
                        issueCloseDate:"",
                        technician:"vulve02",
                        issueTitle:"How to clean nexus repository?",
                        status:SurveyStatus.NotStarted

                  });
                  Surveys.insert(
                    {
                          OSAT:null,
                          caseId:"003121",
                          OSATWithProduct:null,
                          LTR:null,
                          siteId:123,
                          productID:"PD1055",
                          productName:"CA LISA",
                          contactSupportEasy:null,
                          promptResponse:null,
                          amountOfTime:null,
                          helpInfomration:null,
                          easeOfUse:null,
                          OSATwithAgent:null,
                          understand:null,
                          techSkills:null,
                          communication:null,
                          expectation:null,
                          guidance:null,
                          phone:false,
                          webSupport:false,
                          chat:false,
                          knowledgeDB:false,
                          communities:false,
                          None:false,
                          pResolution:"",
                          effortExp:"",
                          Qualities:"",
                          comments:"",
                          responseDate:"",
                          issueOpenDate:"",
                          issueCloseDate:"",
                          technician:"jaisa05",
                          issueTitle:"Datamangement Server Crashed! urgent",
                          status:SurveyStatus.NotStarted

                    });
                    Surveys.insert(
                      {
                            OSAT:null,
                            caseId:"0010023",
                            OSATWithProduct:null,
                            LTR:null,
                            siteId:123,
                            productID:"PD1055",
                            productName:"CA LISA",
                            contactSupportEasy:null,
                            promptResponse:null,
                            amountOfTime:null,
                            helpInfomration:null,
                            easeOfUse:null,
                            OSATwithAgent:null,
                            understand:null,
                            techSkills:null,
                            communication:null,
                            expectation:null,
                            guidance:null,
                            phone:false,
                            webSupport:false,
                            chat:false,
                            knowledgeDB:false,
                            communities:false,
                            None:false,
                            pResolution:"",
                            effortExp:"",
                            Qualities:"",
                            comments:"",
                            responseDate:"",
                            issueOpenDate:"",
                            issueCloseDate:"",
                            technician:"jaisa05",
                            issueTitle:"MALFORMED zip",
                            status:SurveyStatus.Incompleted

                      });
                      Surveys.insert(
                        {
                              OSAT:null,
                              caseId:"0010029",
                              OSATWithProduct:null,
                              LTR:null,
                              siteId:123,
                              productID:"PD1345",
                              productName:"CA Release Automation",
                              contactSupportEasy:null,
                              promptResponse:null,
                              amountOfTime:null,
                              helpInfomration:null,
                              easeOfUse:null,
                              OSATwithAgent:null,
                              understand:null,
                              techSkills:null,
                              communication:null,
                              expectation:null,
                              guidance:null,
                              phone:false,
                              webSupport:false,
                              chat:false,
                              knowledgeDB:false,
                              communities:false,
                              None:false,
                              pResolution:"",
                              effortExp:"",
                              Qualities:"",
                              comments:"",
                              responseDate:"",
                              issueOpenDate:"",
                              issueCloseDate:"",
                              technician:"vulve02",
                              issueTitle:"Unable to login to ASAP",
                              status:SurveyStatus.Incompleted

                        });
                        Surveys.insert(
                          {
                                OSAT:null,
                                caseId:"0011123",
                                OSATWithProduct:null,
                                LTR:null,
                                siteId:123,
                                productID:"PD1055",
                                productName:"CA LISA",
                                contactSupportEasy:null,
                                promptResponse:null,
                                amountOfTime:null,
                                helpInfomration:null,
                                easeOfUse:null,
                                OSATwithAgent:null,
                                understand:null,
                                techSkills:null,
                                communication:null,
                                expectation:null,
                                guidance:null,
                                phone:false,
                                webSupport:false,
                                chat:false,
                                knowledgeDB:false,
                                communities:false,
                                None:false,
                                pResolution:"",
                                effortExp:"",
                                Qualities:"",
                                comments:"",
                                responseDate:"",
                                issueOpenDate:"",
                                issueCloseDate:"",
                                technician:"vulve02",
                                issueTitle:"Unable to collect logs",
                                status:SurveyStatus.NotStarted

                          });
                          Surveys.insert(
                            {
                                  OSAT:null,
                                  caseId:"0011023",
                                  OSATWithProduct:null,
                                  LTR:null,
                                  siteId:123,
                                  productID:"PD1345",
                                  productName:"CA Release Automation",
                                  contactSupportEasy:null,
                                  promptResponse:null,
                                  amountOfTime:null,
                                  helpInfomration:null,
                                  easeOfUse:null,
                                  OSATwithAgent:null,
                                  understand:null,
                                  techSkills:null,
                                  communication:null,
                                  expectation:null,
                                  guidance:null,
                                  phone:false,
                                  webSupport:false,
                                  chat:false,
                                  knowledgeDB:false,
                                  communities:false,
                                  None:false,
                                  pResolution:"",
                                  effortExp:"",
                                  Qualities:"",
                                  comments:"",
                                  responseDate:"",
                                  issueOpenDate:"",
                                  issueCloseDate:"",
                                  technician:"jaisa05",
                                  issueTitle:"NES Unreachable",
                                  status:SurveyStatus.Incompleted

                            });
                            Surveys.insert(
                              {
                                    OSAT:null,
                                    caseId:"012019",
                                    OSATWithProduct:null,
                                    LTR:null,
                                    siteId:123,
                                    productID:"PD1055",
                                    productName:"CA LISA",
                                    contactSupportEasy:null,
                                    promptResponse:null,
                                    amountOfTime:null,
                                    helpInfomration:null,
                                    easeOfUse:null,
                                    OSATwithAgent:null,
                                    understand:null,
                                    techSkills:null,
                                    communication:null,
                                    expectation:null,
                                    guidance:null,
                                    phone:false,
                                    webSupport:false,
                                    chat:false,
                                    knowledgeDB:false,
                                    communities:false,
                                    None:false,
                                    pResolution:"",
                                    effortExp:"",
                                    Qualities:"",
                                    comments:"",
                                    responseDate:"",
                                    issueOpenDate:"",
                                    issueCloseDate:"",
                                    technician:"jaisa05",
                                    issueTitle:"Agent Unreachable",
                                    status:SurveyStatus.NotStarted

                              });
          }//end of parent if
              //count images inserted
              if(Sites.find().count()==0)
                {
                  Sites.insert({
                    siteId:123,
                    siteLoyalty:20
                  });

                }
          console.log(Surveys.find().count());


        //count images inserted
        console.log(Updates.find().count());

});
