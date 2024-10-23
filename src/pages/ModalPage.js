import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modalButton = (
    <Button primary onClick={handleClose}>
      I accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={modalButton}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue
        risus lacus, ac semper neque efficitur sed. Aenean egestas id nisi ut
        hendrerit. Nulla tristique elementum lobortis. Curabitur venenatis
        accumsan dolor, ut molestie diam vestibulum et. Phasellus aliquet vitae
        elit ut molestie. Ut tempus nibh eu arcu accumsan, et faucibus massa
        cursus. Suspendisse sem turpis, vulputate non volutpat ut, ullamcorper
        lacinia quam. Aenean interdum, urna eu mattis faucibus, purus ante
        dignissim eros, non egestas sapien augue non mi. Proin eu dapibus neque,
        nec tincidunt magna. Ut quis purus lacinia, efficitur eros ullamcorper,
        convallis odio. Aliquam quis interdum lorem, id gravida dolor. Proin
        laoreet laoreet elit, vitae feugiat mauris auctor ac. Cras vestibulum mi
        metus, et malesuada nisl mollis at. Morbi sagittis dui eget ex sodales
        malesuada non et nunc. Aliquam sodales vestibulum risus vitae ornare.
        Nam tincidunt nibh ut lorem luctus pharetra ut a dolor. Proin aliquam
        blandit pretium. Aliquam ultricies imperdiet tellus sed condimentum.
        Quisque convallis ex vel suscipit pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue
        risus lacus, ac semper neque efficitur sed. Aenean egestas id nisi ut
        hendrerit. Nulla tristique elementum lobortis. Curabitur venenatis
        accumsan dolor, ut molestie diam vestibulum et. Phasellus aliquet vitae
        elit ut molestie. Ut tempus nibh eu arcu accumsan, et faucibus massa
        cursus. Suspendisse sem turpis, vulputate non volutpat ut, ullamcorper
        lacinia quam. Aenean interdum, urna eu mattis faucibus, purus ante
        dignissim eros, non egestas sapien augue non mi. Proin eu dapibus neque,
        nec tincidunt magna. Ut quis purus lacinia, efficitur eros ullamcorper,
        convallis odio. Aliquam quis interdum lorem, id gravida dolor. Proin
        laoreet laoreet elit, vitae feugiat mauris auctor ac. Cras vestibulum mi
        metus, et malesuada nisl mollis at. Morbi sagittis dui eget ex sodales
        malesuada non et nunc. Aliquam sodales vestibulum risus vitae ornare.
        Nam tincidunt nibh ut lorem luctus pharetra ut a dolor. Proin aliquam
        blandit pretium. Aliquam ultricies imperdiet tellus sed condimentum.
        Quisque convallis ex vel suscipit pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue
        risus lacus, ac semper neque efficitur sed. Aenean egestas id nisi ut
        hendrerit. Nulla tristique elementum lobortis. Curabitur venenatis
        accumsan dolor, ut molestie diam vestibulum et. Phasellus aliquet vitae
        elit ut molestie. Ut tempus nibh eu arcu accumsan, et faucibus massa
        cursus. Suspendisse sem turpis, vulputate non volutpat ut, ullamcorper
        lacinia quam. Aenean interdum, urna eu mattis faucibus, purus ante
        dignissim eros, non egestas sapien augue non mi. Proin eu dapibus neque,
        nec tincidunt magna. Ut quis purus lacinia, efficitur eros ullamcorper,
        convallis odio. Aliquam quis interdum lorem, id gravida dolor. Proin
        laoreet laoreet elit, vitae feugiat mauris auctor ac. Cras vestibulum mi
        metus, et malesuada nisl mollis at. Morbi sagittis dui eget ex sodales
        malesuada non et nunc. Aliquam sodales vestibulum risus vitae ornare.
        Nam tincidunt nibh ut lorem luctus pharetra ut a dolor. Proin aliquam
        blandit pretium. Aliquam ultricies imperdiet tellus sed condimentum.
        Quisque convallis ex vel suscipit pretium.
      </p>
    </div>
  );
}

export default ModalPage;
