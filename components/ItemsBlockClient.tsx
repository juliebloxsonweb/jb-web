import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import { TableOfContents } from "./TableOfContents";
import { TrackedSection } from "./TrackedSection";

export function ItemsBlockClient() {
  const { values } = useTOCContextValues();
  return (
    <TOCContext.Provider value={values}>
      <div className="container">
        <div className="grid grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_15%] my-2">
          <TableOfContents />
          <article className="min-h-screen mx-auto max-w-[80ch] w-[80vw]">
            <TrackedSection sectionId={0} tocTitle="Publications" isFirst>
              {/* <PublicationBlock /> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem incidunt eveniet architecto quod quis eaque! Inventore laboriosam facilis magnam nostrum officia. Consectetur porro optio laudantium, doloribus sed atque amet facilis veniam, inventore molestias sit magni autem aspernatur, quis deserunt distinctio totam repellat possimus velit ab aliquid. Asperiores quod modi velit maxime? Neque iure dolorem assumenda officia! Minus reiciendis fuga expedita nam? Facilis, commodi sapiente ipsum a tempora incidunt, magni, distinctio pariatur praesentium temporibus nam ipsa quaerat vitae voluptate minus. Officia laborum nihil vel perferendis aliquid cumque sit eum facilis, velit laboriosam quia! Beatae, quae quas corrupti fuga doloribus maiores, id, accusantium unde rerum natus ab corporis itaque nostrum. Laborum sapiente facilis iure, nulla id accusantium libero nisi quo repellendus labore totam atque praesentium animi eum? Quo nulla pariatur ullam error, alias accusantium eligendi. Assumenda veritatis et iste non molestiae dicta! Cum perferendis quos corrupti sequi iure ex, nostrum, voluptas inventore reiciendis, dolore consequuntur officiis ea? Ea iure, a libero quidem accusamus dolorem ex fuga! Enim at molestiae rerum cupiditate esse accusantium voluptatem impedit repellat laboriosam, incidunt eaque dolor, exercitationem sapiente eveniet perferendis assumenda accusamus necessitatibus possimus molestias hic doloremque optio tenetur expedita. Fugiat harum expedita facere? Sint, soluta omnis! </p>
            </TrackedSection>

            <TrackedSection sectionId={1} tocTitle="Speaking Events">
              {/* <PublicationBlock /> */}
              <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem incidunt eveniet architecto quod quis eaque! Inventore laboriosam facilis magnam nostrum officia. Consectetur porro optio laudantium, doloribus sed atque amet facilis veniam, inventore molestias sit magni autem aspernatur, quis deserunt distinctio totam repellat possimus velit ab aliquid. Asperiores quod modi velit maxime? Neque iure dolorem assumenda officia! Minus reiciendis fuga expedita nam? Facilis, commodi sapiente ipsum a tempora incidunt, magni, distinctio pariatur praesentium temporibus nam ipsa quaerat vitae voluptate minus. Officia laborum nihil vel perferendis aliquid cumque sit eum facilis, velit laboriosam quia! Beatae, quae quas corrupti fuga doloribus maiores, id, accusantium unde rerum natus ab corporis itaque nostrum. Laborum sapiente facilis iure, nulla id accusantium libero nisi quo repellendus labore totam atque praesentium animi eum? Quo nulla pariatur ullam error, alias accusantium eligendi. Assumenda veritatis et iste non molestiae dicta! Cum perferendis quos corrupti sequi iure ex, nostrum, voluptas inventore reiciendis, dolore consequuntur officiis ea? Ea iure, a libero quidem accusamus dolorem ex fuga! Enim at molestiae rerum cupiditate esse accusantium voluptatem impedit repellat laboriosam, incidunt eaque dolor, exercitationem sapiente eveniet perferendis assumenda accusamus necessitatibus possimus molestias hic doloremque optio tenetur expedita. Fugiat harum expedita facere? Sint, soluta omnis! </p>
            </TrackedSection>

            <TrackedSection sectionId={2} tocTitle="Awards" isLast>
              {/* <PublicationBlock /> */}
              <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem incidunt eveniet architecto quod quis eaque! Inventore laboriosam facilis magnam nostrum officia. Consectetur porro optio laudantium, doloribus sed atque amet facilis veniam, inventore molestias sit magni autem aspernatur, quis deserunt distinctio totam repellat possimus velit ab aliquid. Asperiores quod modi velit maxime? Neque iure dolorem assumenda officia! Minus reiciendis fuga expedita nam? Facilis, commodi sapiente ipsum a tempora incidunt, magni, distinctio pariatur praesentium temporibus nam ipsa quaerat vitae voluptate minus. Officia laborum nihil vel perferendis aliquid cumque sit eum facilis, velit laboriosam quia! Beatae, quae quas corrupti fuga doloribus maiores, id, accusantium unde rerum natus ab corporis itaque nostrum. Laborum sapiente facilis iure, nulla id accusantium libero nisi quo repellendus labore totam atque praesentium animi eum? Quo nulla pariatur ullam error, alias accusantium eligendi. Assumenda veritatis et iste non molestiae dicta! Cum perferendis quos corrupti sequi iure ex, nostrum, voluptas inventore reiciendis, dolore consequuntur officiis ea? Ea iure, a libero quidem accusamus dolorem ex fuga! Enim at molestiae rerum cupiditate esse accusantium voluptatem impedit repellat laboriosam, incidunt eaque dolor, exercitationem sapiente eveniet perferendis assumenda accusamus necessitatibus possimus molestias hic doloremque optio tenetur expedita. Fugiat harum expedita facere? Sint, soluta omnis! </p>
            </TrackedSection>
          </article>
        </div>
      </div>
    </TOCContext.Provider>
  );
}
