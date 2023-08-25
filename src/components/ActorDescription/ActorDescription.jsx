import React from 'react';
import PropTypes from 'prop-types';
import classes from './ActorDescription.module.scss';
import useTranslation from '../../hooks/useTranslation';

const ActorDescription = (props) => {
  const { actorDescription } = props;
  return (
    <div className={classes.actorWrap}>
      <img
        className={classes.posterActor}
        src={`https://image.tmdb.org/t/p/w300/${actorDescription.profile_path}`}
        alt="poster"
      />
      <p>{`${useTranslation('actor.name')}: ${actorDescription.name}`}</p>
      <p>{`${useTranslation('actor.birthday')}: ${actorDescription.birthday}`}</p>
      <p>{actorDescription.biography}</p>
    </div>
  );
};

ActorDescription.propTypes = {
  actorDescription: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string,
    biography: PropTypes.string,
    profile_path: PropTypes.string,
  }).isRequired,
};

export default ActorDescription;
