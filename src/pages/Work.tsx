import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { commissions } from '@/data/commissions';
import { Button } from '@/components/ui/button';

const Work = () => {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <Reveal>
          <h1 className="text-display-xl mb-3">Recent work</h1>
          <p className="text-body text-luxury-text-muted max-w-2xl mb-12">
            Selected commissions from the past year. Names are abbreviated for
            privacy. Each project includes the constraints we worked around and
            the final spec sheet.
          </p>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {commissions.map((item, i) => (
            <Reveal key={item.id} delay={i * 40}>
              <article
                id={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 scroll-mt-20"
              >
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-label">{item.client} · {item.location}</p>
                  <h2 className="text-display-sm mt-1 mb-4">{item.title}</h2>
                  <p className="text-body text-luxury-text-muted mb-6">{item.story}</p>

                  <table className="spec-table border-t border-border">
                    <tbody>
                      <tr className="border-b border-border">
                        <th>Setting</th>
                        <td>{item.setting}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <th>Stone</th>
                        <td>{item.stone}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <th>Metal</th>
                        <td>{item.metal}</td>
                      </tr>
                      <tr className="border-b border-border">
                        <th>Timeline</th>
                        <td>{item.timeline}</td>
                      </tr>
                      <tr>
                        <th>Final price</th>
                        <td>{item.budget}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 pt-12 border-t border-border text-center">
            <p className="text-body text-luxury-text-muted mb-4">
              Want something similar — or nothing like these at all?
            </p>
            <Link to="/design">
              <Button variant="luxury">Start your brief</Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Work;
