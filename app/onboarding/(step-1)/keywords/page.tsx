'use client';
import React, { useState, useEffect, useContext } from 'react';
import '@/onboarding/_styles/pages/_keywords.scss';
import { FaPlus } from 'react-icons/fa';
import Badge from '@/components/Badge';
import { useRouter } from 'next/navigation';
import UpdateProgress from '@/onboarding/libs/UpdateProgress';
import GetProgress from '@/onboarding/libs/GetProgress';
import Tooltip from '@/onboarding/_components/ToolTip';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getSession, Session } from '@auth0/nextjs-auth0';
import { useAccessToken } from '@/_providers/AccessTokenProvider';

const Page: React.FC = () => {
  const { accessToken } = useAccessToken();

  // const userContext = useUser();
  // const user = userContext.user;
  // console.log(userContext);
  const [keywords, setKeywords] = useState<
    Array<{
      keyword: string;
      secondaryKeywords: string[];
    }>
  >([
    {
      keyword: '',
      secondaryKeywords: []
    }
  ]);
  const [processKeywords, setProcessKeywords] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    // console.log(accessToken);
    // if (accessToken !== '' && accessToken !== null) {
    //   fetch('http://localhost:3001/user-task', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       keywords: keywords.map((keyword) => {
    //         return {
    //           keyword: keyword.keyword,
    //           secondaryKeywords: keyword.secondaryKeywords ?? [],
    //           excludedKeywords: []
    //         };
    //       })
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${accessToken}`
    //     }
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       // setKeywords(
    //       //   data.keywords.map((keyword: any) => {
    //       //     return {
    //       //       keyword: keyword.primary,
    //       //       secondaryKeywords: keyword.secondary
    //       //     };
    //       //   })
    //       // );
    //     });
    // }
    // if (user && processKeywords === true) {
    //   setProcessKeywords(false);
    //   fetch('http://localhost:3001/user-task', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${user.token}`
    //     },
    //     body: JSON.stringify({
    //       keywords: keywords.map((keyword) => {
    //         return {
    //           keyword: keyword.keyword,
    //           secondaryKeywords: keyword.secondaryKeywords ?? [],
    //           excludedKeywords: []
    //         };
    //       })
    //     })
    //   }).then((response) => {
    //     console.log(response);
    //   });
    // }
  }, [accessToken, keywords]);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log('submit');
    event.preventDefault();

    fetch('http://localhost:3001/user-task', {
      method: 'POST',
      body: JSON.stringify({
        keywords: keywords.map((keyword) => {
          return {
            keyword: keyword.keyword,
            secondaryKeywords: keyword.secondaryKeywords ?? [],
            excludedKeywords: []
          };
        })
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });
    router.replace('/onboarding');
    // handle form submission logic here
  };
  const ChangeKeyword = (keyword: string, index: number) => {
    const newKeywords = [...keywords];
    newKeywords[index] = { ...keywords[index], keyword: keyword };

    setKeywords(newKeywords);
  };

  if (keywords === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="keyword-page">
      <h2>Choose your keywords</h2>
      <p>
        We’ll gather data based on your selected keywords, and customize your
        dashboard with visual charts for an easy, graphical interpretation.
      </p>
      <table className="keyword-table">
        <thead>
          <tr>
            <th>
              Primary Keywords <Tooltip content={''} />
            </th>
            <th>Secondary Keywords</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((keyword, index) => (
            <tr key={index}>
              <td>
                <div>
                  <input
                    type="text"
                    value={keyword.keyword}
                    onChange={(event) => {
                      ChangeKeyword(event.target.value, index);
                    }}
                    onBlur={(event) => {
                      setProcessKeywords(true);
                    }}
                  />
                </div>
              </td>
              <td>
                <div className="secondary-words">
                  <div className="secondary-words-holder">
                    {keyword.secondaryKeywords.map(
                      (secondaryKeyword, secondaryIndex) => (
                        <>
                          {keyword.secondaryKeywords.length ===
                          secondaryIndex + 1 ? (
                            <input
                              key={index}
                              type="text"
                              value={secondaryKeyword}
                              onChange={(event) => {
                                // ChangeSecondaryKeyword(
                                //   event,
                                //   index,
                                //   secondaryIndex
                                // );
                              }}
                              onBlur={(event) => {
                                // if (event.target.value !== '') {
                                //   AddSecondaryKeyword(index);
                                // }
                              }}
                            />
                          ) : (
                            <Badge
                              onDismiss={() => {
                                // RemoveSecondaryKeyword(index, secondaryIndex);
                              }}
                              text={secondaryKeyword}
                            />
                          )}
                        </>
                      )
                    )}
                  </div>

                  <button
                    onClick={(event) => {
                      const keywords = keyword.secondaryKeywords;
                      if (keywords.length === 0) {
                        if (keywords[keywords.length - 1] !== '') {
                          // AddSecondaryKeyword(index);
                        }
                      }
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan={2}>
              <button
                onClick={() => {
                  // AddPrimaryKeyword();
                }}
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <b>Excluded Keywords</b> */}
      <div className="btn-group">
        <button
          className="keyword-save"
          onClick={(event) => {
            handleSubmit(event);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Page;
