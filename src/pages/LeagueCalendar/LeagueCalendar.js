import "../../styles/ImageAdaptation.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import DateCalendar from "../../components/DateCalendar/DateCalendar";
import DataTable from "../../components/DataTable/DataTable";
import formatDate from "../../utils/DateFormatteers/formatDate";
import formatTime from "../../utils/DateFormatteers/formatTime";
import columns from "../../utils/data/columnsData";
import rowsStatus from "../../utils/data/statusData";
import { Link, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux/es/exports";
import { axiosCompetitionMatches } from "../../store/competitionMatchesSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const LeagueCalendar = () => {
  const matches = useSelector(
    (state) => state.competitionMatches.competitionMatches
  );

  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [dateBefore, setDateBefore] = useState(dayjs("2022-04-17"));
  const [dateAfter, setDateAfter] = useState(dayjs("2023-06-18"));
  const [error, setError] = useState();

  const { hash } = useLocation();

  const competitionId = hash.slice(1);

  useEffect(() => {
    try {
      dispatch(axiosCompetitionMatches(competitionId));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [matches]);

  const filteredMatches =
    dateBefore && dateAfter
      ? matches.filter((item) => {
          return (
            new Date(item.season.startDate) > new Date(dateBefore) &&
            new Date(item.season.startDate) < new Date(dateAfter)
          );
        })
      : dateBefore
      ? matches.filter((item) => {
          return new Date(item.season.startDate) > new Date(dateBefore);
        })
      : dateAfter
      ? matches.filter((item) => {
          return new Date(item.season.startDate) < new Date(dateAfter);
        })
      : matches;

  const rows = filteredMatches.map((match, index) => {
    return {
      id: index + 1,
      competition: match.competition.name,
      date: match.season.startDate.replace(
        match.season.startDate,
        formatDate(match.season.startDate)
      ),
      time: match.utcDate.replace(match.utcDate, formatTime(match.utcDate)),
      status: match.status.replace(match.status, rowsStatus[match.status]),
      "team 1 - team 2": `${match.homeTeam.shortName}  -  ${match.awayTeam.shortName}`,
      score: match.score.penalties
        ? `${match.score.fullTime.home} : ${match.score.fullTime.away} (${match.score.extraTime.home}:${match.score.extraTime.away}) (${match.score.penalties.home}:${match.score.penalties.away})`
        : match.score.extraTime
        ? `${match.score.fullTime.home} : ${match.score.fullTime.away} (${match.score.extraTime.home}:${match.score.extraTime.away})`
        : match.score.fullTime.home !== null
        ? `${match.score.fullTime.home} : ${match.score.fullTime.away}`
        : " X " + "" + " - " + " X ",
    };
  });

  const getData = () => {
    if (matches) {
      const leagueName = matches.map((compet) => {
        return {
          name: compet.competition.name,
          emblem: compet.competition.emblem,
        };
      });

      setData(leagueName[0]);
    }
  };

  if (data) {
    return (
      <>
        {error && (
          <Box>
            <h2 style={{ color: "red" }}>{`ERROR:${error}`}</h2>
          </Box>
        )}
        <Box
          style={{
            display: "flex",
          }}
        >
          <img
            className="img"
            src={data.emblem}
            loading="lazy"
            style={{
              marginLeft: "2%",
            }}
          />
          <Box
            sx={{
              display: "block",
              marginLeft: "5%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                fontSize: "h6.fontSize",
              }}
            >
              <Link
                href="/leagues"
                variant="body2"
                sx={{ fontSize: { xs: "15px", md: "30px" } }}
              >
                Лиги
              </Link>
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "15px", md: "30px" },
                }}
              >
                &gt;
              </Typography>
              <Link
                href={`/league/#${competitionId}`}
                variant="body2"
                sx={{ fontSize: { xs: "15px", md: "30px" } }}
              >
                {data.name}
              </Link>
            </Box>

            <DateCalendar
              dateBefore={dateBefore}
              setDateBefore={setDateBefore}
              dateAfter={dateAfter}
              setDateAfter={setDateAfter}
            />
            <Box
              style={{
                height: 600,
              }}
            >
              <DataTable rows={rows} columns={columns} />
            </Box>
          </Box>
        </Box>
        ;
      </>
    );
  }
};
