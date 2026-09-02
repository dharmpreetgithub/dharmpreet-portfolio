export type Project = {
  slug: string;
  number: string;
  name: string;
  date: string;
  tagline: string; // one-line outcome, shown on the card
  tech: string[];
  category: "ai" | "sde";
  problem: string;
  approach: string;
  architecture: string[]; // pipeline steps, rendered as a flow diagram
  architectureNote?: string;
  implementation: string;
  results: string;
  learnings: string;
};

// Real projects only. Do not add fabricated metrics or details beyond
// what's provided — case study copy should stay traceable to this file.
export const projects: Project[] = [
  {
    slug: "rag-knowledge-assistant",
    number: "01",
    name: "RAG Knowledge Assistant",
    date: "August 2026",
    tagline: "Agentic retrieval system for grounded document intelligence.",
    tech: ["Python", "FastAPI", "LangGraph", "Gemini API", "ChromaDB", "BM25"],
    category: "ai",
    problem:
      "Most document Q&A systems retrieve once and generate immediately, which means a bad retrieval silently becomes a confident, wrong answer. I wanted a system that could route queries, validate its own evidence, and say 'I don't know' when the evidence didn't support an answer — an agentic RAG pipeline rather than a single retrieve-then-generate pass.",
    approach:
      "The system combines semantic (dense vector) retrieval with BM25 lexical retrieval, then reranks the merged candidates before generation. A query router decides whether a question needs clarification before retrieval even runs, and a relevance threshold gates whether retrieved evidence is strong enough to proceed. Generation is constrained to be grounded in the validated evidence, with an explicit fallback when nothing clears the bar.",
    architecture: [
      "Documents",
      "Ingestion",
      "Hybrid Retrieval",
      "Reranking",
      "Evidence Validation",
      "Grounded LLM Response",
    ],
    architectureNote:
      "Built with LangGraph to express retrieval, validation, and generation as explicit graph steps rather than a single prompt chain.",
    implementation:
      "Ingestion chunks and indexes documents into ChromaDB for dense retrieval, alongside a BM25 index for lexical matching. Query routing handles ambiguous questions with a clarification turn before retrieval runs. Evidence validation applies relevance thresholds after reranking, and the evaluation harness is resumable, so a long evaluation run can pick back up after an interruption instead of restarting.",
    results:
      "Evaluated across four dimensions: retrieval quality, groundedness, latency, and answer quality — measuring not just whether the system produced an answer, but whether that answer was actually supported by retrieved evidence.",
    learnings:
      "Groundedness turned out to be the harder half of the problem — a reranker can only work with what retrieval hands it, so most of the meaningful gains came from improving hybrid retrieval and thresholding, not from tuning the generation prompt.",
  },
  {
    slug: "eeg-emg-robotic-arm",
    number: "02",
    name: "Multimodal EEG–EMG Robotic Arm Controller",
    date: "June 2026",
    tagline: "Two-stage multimodal pipeline for EEG movement-intent and EMG gesture control.",
    tech: ["Python", "PyTorch", "CNN", "Signal Processing", "PhysioNet", "NinaPro"],
    category: "ai",
    problem:
      "Single-modality signal control — EEG alone or EMG alone — tends to be noisy or limited in the number of distinguishable commands it can support. I wanted to test whether combining brain signal intent detection with muscle signal gesture classification could produce a more reliable two-stage control pipeline for a robotic arm.",
    approach:
      "The pipeline is deliberately two-stage rather than a single fused model: an EEG-based classifier first detects movement intent, and once intent is detected, an EMG-based classifier identifies the specific gesture, which is translated into a robotic control command.",
    architecture: [
      "EEG",
      "Movement Intent",
      "EMG",
      "Gesture Classification",
      "Robotic Control",
    ],
    architectureNote:
      "Trained and evaluated on the PhysioNet (EEG) and NinaPro (EMG) datasets.",
    implementation:
      "Movement-intent detection uses a CNN trained on EEG signal windows from PhysioNet. Gesture classification uses a separate CNN trained on EMG data from NinaPro, covering 12 distinct gestures. The two stages run in sequence: intent detection gates whether gesture classification runs at all.",
    results:
      "91.46% EEG movement-intent accuracy across 20 subjects, and approximately 75.7% EMG gesture classification accuracy across 12 gestures.",
    learnings:
      "The gap between EEG and EMG accuracy was the most interesting finding — EMG gesture classification across 12 classes is a meaningfully harder discrimination problem than binary/limited-class movement intent, which shaped how I'd think about scaling the gesture set in a follow-up.",
  },
  {
    slug: "dysarthric-speech-severity",
    number: "03",
    name: "Dysarthric Speech Severity Detection",
    date: "April 2026",
    tagline: "CRNN-based severity classification for dysarthric speech.",
    tech: ["Python", "PyTorch", "CRNN", "BiLSTM", "Mel-Spectrograms", "TORGO"],
    category: "ai",
    problem:
      "Dysarthria severity is normally assessed by trained clinicians listening to speech samples — a process that doesn't scale and depends on rater availability. I wanted to test whether a CRNN-style architecture could classify severity directly from audio, using the TORGO dataset.",
    approach:
      "Audio is standardized to 16 kHz and converted to Mel-spectrograms, which are fed through a 3-layer CNN for local feature extraction and then a 2-layer BiLSTM to capture temporal structure across the utterance. Stratified sampling and class-weighted loss address the class imbalance across severity levels.",
    architecture: [
      "Audio",
      "Preprocessing",
      "Mel-Spectrogram",
      "CNN",
      "BiLSTM",
      "Severity Classification",
    ],
    architectureNote: "3-layer CNN + 2-layer BiLSTM, trained on the TORGO dataset.",
    implementation:
      "Preprocessing standardizes all audio to 16 kHz before Mel-spectrogram generation. Stratified sampling keeps class proportions consistent across train/validation splits, and class-weighted loss compensates for the natural imbalance between Normal, Mild, Moderate, and Severe samples in TORGO.",
    results:
      "98.49% peak validation accuracy across four severity classes: Normal, Mild, Moderate, and Severe.",
    learnings:
      "Class-weighted loss made a bigger difference than architecture tuning here — the initial unweighted model looked reasonable on aggregate accuracy but was quietly failing on the minority severity classes until the loss function accounted for that imbalance.",
  },
  {
    slug: "pharmasynq",
    number: "04",
    name: "PharmaSynq",
    date: "January 2026",
    tagline: "Rule-based pharmacy management system with OCR invoice processing.",
    tech: ["Software Engineering", "OCR", "Database Management", "UML", "Testing"],
    category: "sde",
    problem:
      "Small pharmacies often manage inventory, billing, and prescriptions through disconnected manual processes — spreadsheets for stock, paper for prescriptions, and no systematic tracking of expiry dates until stock is already unsellable. PharmaSynq is a rule-based system designed around that actual workflow.",
    approach:
      "The system is built around role-based access for three distinct users — Admin, Pharmacist, and Sales Staff — each with a scoped view of the system, plus a rule-based engine for GST billing, batch/expiry tracking, and prescription validation rather than a one-size-fits-all interface.",
    architecture: [
      "Requirements (SRS)",
      "Design (UML / DFD)",
      "Core Modules",
      "Testing",
    ],
    architectureNote:
      "Core modules: inventory management, GST billing, batch & expiry tracking, prescription validation, low-stock/expiry alerts, authentication & role-based access, and OCR-based wholesaler invoice processing.",
    implementation:
      "Development followed a documented SRS and UML/DFD design phase before implementation. OCR handles wholesaler invoice ingestion, reducing manual re-entry of incoming stock. Low-stock and expiry alerts run against the inventory and batch-tracking data to flag issues before they become unsellable stock.",
    results:
      "Delivered as a complete system with documented functional, integration, system, security, and usability testing passes — the engineering process was treated as seriously as the feature set.",
    learnings:
      "Writing the SRS and UML/DFD before implementation caught several role-permission edge cases (like what a Sales Staff account should and shouldn't be able to void) that would have been far more expensive to discover after the roles were already coded.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
