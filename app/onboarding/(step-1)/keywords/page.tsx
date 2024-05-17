'use client';
import React, { useState, useEffect } from 'react';
import '@/onboarding/_styles/pages/_keywords.scss';
import { FaPlus } from 'react-icons/fa';
import Badge from '@/components/Badge';
import { useRouter } from 'next/navigation';
import UpdateProgress from '@/onboarding/libs/UpdateProgress';
import GetProgress from '@/onboarding/libs/GetProgress';

const Page: React.FC = () => {
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
  const router = useRouter();

  useEffect(() => {
    const progress = GetProgress();
    if (progress.keywords) {
      setKeywords(
        progress.keywords.map((keyword) => {
          const secondaryKeywords = keyword.secondary;
          secondaryKeywords.push('');
          return {
            keyword: keyword.primary,
            secondaryKeywords: secondaryKeywords
          };
        })
      );
    }
  }, []);
  const AddSecondaryKeyword = (index: number) => {
    const newKeywords = [...keywords];
    newKeywords[index].secondaryKeywords.push('');
    setKeywords(newKeywords);
  };
  const ChangeSecondaryKeyword = (
    event: React.ChangeEvent<HTMLInputElement>,
    primaryIndex: number,
    secondaryIndex: number
  ) => {
    const newKeywords = [...keywords];
    newKeywords[primaryIndex].secondaryKeywords[secondaryIndex] =
      event.target.value;
    console.log(newKeywords);
    setKeywords(newKeywords);
  };
  const ChangePrimaryKeyword = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newKeywords = [...keywords];
    newKeywords[index].keyword = event.target.value;
    setKeywords(newKeywords);
  };
  const AddPrimaryKeyword = () => {
    setKeywords([
      ...keywords,
      {
        keyword: '',
        secondaryKeywords: []
      }
    ]);
  };
  const RemoveSecondaryKeyword = (
    primaryIndex: number,
    secondaryIndex: number
  ) => {
    const newKeywords = Object.assign([{}], keywords);
    // const secKeywords = newKeywords[primaryIndex].secondaryKeywords.splice(
    //   secondaryIndex,
    //   1
    // );

    // const secondwords: string[] = [];
    // newKeywords[primaryIndex].secondaryKeywords.forEach((word) => {
    //   secondwords.push(word);
    // });
    newKeywords[primaryIndex].secondaryKeywords = newKeywords[
      primaryIndex
    ].secondaryKeywords.filter((kword, index) => {
      return index !== secondaryIndex;
    });
    setKeywords([...newKeywords]);
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
            <th>Primary Keywords</th>
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
                      ChangePrimaryKeyword(event, index);
                    }}
                  />
                </div>
              </td>
              <td>
                <div className="secondary-words">
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
                              ChangeSecondaryKeyword(
                                event,
                                index,
                                secondaryIndex
                              );
                            }}
                            onBlur={(event) => {
                              if (event.target.value !== '') {
                                AddSecondaryKeyword(index);
                              }
                            }}
                          />
                        ) : (
                          <Badge
                            onDismiss={() => {
                              RemoveSecondaryKeyword(index, secondaryIndex);
                            }}
                            text={secondaryKeyword}
                          />
                        )}
                      </>
                    )
                  )}
                  <button
                    onClick={(event) => {
                      const keywords = keyword.secondaryKeywords;
                      if (keywords.length === 0) {
                        if (keywords[keywords.length - 1] !== '') {
                          AddSecondaryKeyword(index);
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
                  AddPrimaryKeyword();
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
          onClick={() => {
            UpdateProgress({
              keywords: keywords.map((keyword) => {
                return {
                  primary: keyword.keyword,
                  secondary: keyword.secondaryKeywords
                };
              })
            });
            router.replace('/onboarding');
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
