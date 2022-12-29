import { NO_IMAGE } from 'src/config';
import { ICast } from 'src/types';

export function Cast({ cast }: { cast: ICast[] }) {
  return (
    <div className="castgrid">
      {cast.length ? (
        cast.map((member) => (
          <div className="castgrid__member" key={member.person.id}>
            <div className="castgrid__member-image">
              <img
                width="100%"
                src={member.person.image?.medium || NO_IMAGE}
                alt="actor portrait"
              />
            </div>
            <div className="castgrid__member-info">
              {member.person.name} as {member.character.name} {member.person._links.self?.href}
            </div>
          </div>
        ))
      ) : (
        <div>No Cast Info Found</div>
      )}
    </div>
  );
}
